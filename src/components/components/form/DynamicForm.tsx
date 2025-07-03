'use client';

import { useForm, useWatch } from 'react-hook-form';
import { Button } from '@/components/components/ui/button';
import { Input } from '@/components/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/components/ui/form';
import { Loader2 } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { CountryCodeData } from '@/components/data/form-fields/CountryCodeData';
export interface FieldConfig {
  name: string;
  label?: string;
  type: 'text' | 'select' | 'hidden' | 'textarea';
  required?: boolean;
  options?: string[];
  rules?: {
    required?: boolean | string;
    minLength?: { value: number; message: string };
    maxLength?: { value: { value: number; message: string } | number; message?: string };
    pattern?: { value: RegExp; message: string };
    validate?: (value: string) => boolean | string;
  };
  defaultValue?: string;
}

interface DynamicFormProps {
  fields: FieldConfig[];
  initialValues?: { [key: string]: any };
  buttonText: string;
  onSubmit: (data: any, reset: () => void) => Promise<void>;
}

const DynamicForm: React.FC<DynamicFormProps> = ({
  fields,
  initialValues = {},
  buttonText,
  onSubmit,
}) => {
  const extendedDefaults = fields.reduce((acc, field) => {
    acc[field.name] = initialValues[field.name] ?? field.defaultValue ?? '';
    return acc;
  }, {} as Record<string, any>);

  const form = useForm({ defaultValues: extendedDefaults });
  const {
    reset,
    control,
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
    getValues
  } = form;

  const [countrySearch, setCountrySearch] = useState('');
  const [filteredCountries, setFilteredCountries] = useState<typeof CountryCodeData>([]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const phoneInputRef = React.useRef<HTMLInputElement>(null);

  // Set default country to India on initial load
  useEffect(() => {
    const defaultCountry = CountryCodeData.find(c => c.country === 'India');
    if (defaultCountry) {
      setValue('countryCode', defaultCountry.country);
      setValue('countryCodeValue', `+${defaultCountry.code}`);
    }
  }, [setValue]);

  // Filter countries based on search input
  useEffect(() => {
    if (countrySearch.trim() === '') {
      setFilteredCountries([]);
      return;
    }

    const searchTerm = countrySearch.toLowerCase();
    const results = CountryCodeData
      .filter(country => country.country.toLowerCase().includes(searchTerm))
      .slice(0, 5);

    setFilteredCountries(results);
  }, [countrySearch]);

  const handleFormSubmit = async (data: any) => {
    await onSubmit(data, () => reset(extendedDefaults));
  };

  const handleCountrySelect = (country: typeof CountryCodeData[0]) => {
    setValue('countryCode', country.country);
    setValue('countryCodeValue', `+${country.code}`);
    setCountrySearch('');
    setFilteredCountries([]);
    setShowCountryDropdown(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        {/* First Name and Last Name */}
        <div className="flex gap-4">
          {fields.filter(field => field.name === 'firstName' || field.name === 'lastName').map((field) => (
            <FormField
              key={field.name}
              control={control}
              name={field.name}
              rules={field.rules}
              render={({ field: f }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      {...f}
                      placeholder={field.label}
                      className="focus:outline-none focus:border-primary-500"
                    />
                  </FormControl>
                  <FormMessage className="font-medium text-xs" />
                </FormItem>
              )}
            />
          ))}
        </div>

        {/* Email Field */}
        {fields.filter(field => field.name === 'email').map((field) => (
          <FormField
            key={field.name}
            control={control}
            name={field.name}
            rules={field.rules}
            render={({ field: f }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...f}
                    placeholder={field.label}
                    className="focus:outline-none focus:border-primary-500"
                  />
                </FormControl>
                <FormMessage className="font-medium text-xs" />
              </FormItem>
            )}
          />
        ))}

        {/* Country and Phone Fields */}
        <div className="flex gap-4">
          {/* Country Search */}
          {fields.filter(field => field.name === 'countryCode').map((field) => {
            const countryValue = useWatch({ control, name: 'countryCode' });
            
            return (
              <FormField
                key={field.name}
                control={control}
                name={field.name}
                rules={field.rules}
                render={({ field: f }) => (
                  <FormItem className="w-1/3 relative">
                    <FormControl>
                      <div>
                        <Input
                          {...f}
                          value={countrySearch || countryValue || ''}
                          onChange={(e) => {
                            const value = e.target.value;
                            setCountrySearch(value);
                            setShowCountryDropdown(true);
                            if (value === '') {
                              setValue('countryCode', '');
                              setValue('countryCodeValue', '');
                            }
                          }}
                          onFocus={() => {
                            setShowCountryDropdown(true);
                            setCountrySearch(countryValue || '');
                          }}
                          onBlur={() => setTimeout(() => setShowCountryDropdown(false), 200)}
                          placeholder="Search country"
                          className="focus:outline-none focus:border-primary-500"
                        />
                        {showCountryDropdown && (
                          <div className="absolute z-10 mt-1 w-max bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                            {filteredCountries.length > 0 ? (
                              filteredCountries.map((country) => (
                                <div
                                  key={country.id}
                                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                  onMouseDown={() => handleCountrySelect(country)}
                                >
                                  {country.country}
                                </div>
                              ))
                            ) : countrySearch ? (
                              <div className="px-4 py-2 text-gray-500">No matching countries found</div>
                            ) : null}
                          </div>
                        )}
                      </div>
                    </FormControl>
                    <FormMessage className="font-medium text-xs" />
                  </FormItem>
                )}
              />
            );
          })}

          {/* Phone Input - Updated without country code prefix */}
          {fields.filter(field => field.name === 'phone').map((field) => (
            <FormField
              key={field.name}
              control={control}
              name={field.name}
              rules={field.rules}
              render={({ field: f }) => (
                <FormItem className="w-2/3">
                  <FormControl>
                    <Input
                      {...f}
                      ref={phoneInputRef}
                      value={f.value || ''}
                      onChange={(e) => {
                        const cleanValue = e.target.value.replace(/[^0-9]/g, '');
                        f.onChange(cleanValue);
                      }}
                      placeholder={field.label}
                      className="focus:outline-none focus:border-primary-500"
                    />
                  </FormControl>
                  <FormMessage className="font-medium text-xs" />
                </FormItem>
              )}
            />
          ))}
        </div>

        {/* Other Fields */}
        {fields.filter(field => !['firstName', 'lastName', 'email', 'countryCode', 'phone'].includes(field.name)).map((field) => {
          if (field.type === 'hidden') {
            return <input key={field.name} type="hidden" {...register(field.name)} />;
          }
          if (field.type === 'select') {
            const value = useWatch({ control, name: field.name });
            return (
              <FormField
                key={field.name}
                control={control}
                name={field.name}
                rules={field.rules}
                render={() => (
                  <FormItem>
                    <FormControl>
                      <Select
                        value={value}
                        onValueChange={(val) => setValue(field.name, val)}
                      >
                        <SelectTrigger className="focus:outline-none focus:border-primary-500">
                          <SelectValue placeholder={field.label ? `Select ${field.label}` : ''} />
                        </SelectTrigger>
                        <SelectContent>
                          {field.options?.map((opt) => (
                            <SelectItem key={opt} value={opt}>
                              {opt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="font-medium text-xs" />
                  </FormItem>
                )}
              />
            );
          }
          if (field.type === 'textarea') {
            return (
              <FormField
                key={field.name}
                control={control}
                name={field.name}
                rules={field.rules}
                render={({ field: f }) => (
                  <FormItem>
                    <FormControl>
                      <textarea
                        {...f}
                        placeholder={field.label}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500 text-sm"
                        rows={4}
                      />
                    </FormControl>
                    <FormMessage className="font-medium text-xs" />
                  </FormItem>
                )}
              />
            );
          }
          return (
            <FormField
              key={field.name}
              control={control}
              name={field.name}
              rules={field.rules}
              render={({ field: f }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...f}
                      placeholder={field.label}
                      className="focus:outline-none focus:border-primary-500"
                    />
                  </FormControl>
                  <FormMessage className="font-medium text-xs" />
                </FormItem>
              )}
            />
          );
        })}

        <p className='text-xs text-gray-600 px-2'>By providing your contact details, you agree to our <a href='/privacy-policy' className='text-primary-600' target='_blank'>Privacy Policy</a></p>
        <Button
          type="submit"
          variant="yellow"
          disabled={isSubmitting}
          className="w-full mt-6 flex items-center justify-center"
        >
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isSubmitting ? 'Submitting...' : buttonText}
        </Button>
      </form>
    </Form>
  );
};

export default DynamicForm;