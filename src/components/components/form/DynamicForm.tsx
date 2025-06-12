// DynamicForm.tsx
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

export interface FieldConfig {
  name: string;
  label?: string;
  type: 'text' | 'select' | 'hidden' | 'textarea';
  required?: boolean;
  options?: string[];
  rules?: {
    required?: boolean | string;
    minLength?: { value: number; message: string };
    maxLength?: { value: number; message: string };
    pattern?: { value: RegExp; message: string };
  };
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
    acc[field.name] = initialValues[field.name] ?? '';
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
  } = form;

  const handleFormSubmit = async (data: any) => {
    await onSubmit(data, () => reset(extendedDefaults));
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        <div className="flex gap-4">
          {fields.slice(0, 2).map((field) => (
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

        {fields.slice(2).map((field) => {
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

        <p className='text-xs text-gray-600 px-2'>By providing your contact details, you agree to our <a href='/privacy' className='text-primary-600' target='_blank'>Privacy Policy</a></p>
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
