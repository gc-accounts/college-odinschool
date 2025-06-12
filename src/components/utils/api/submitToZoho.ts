// utils/submitToZoho.ts
import axios from 'axios';

interface SubmitToZohoProps {
  data: Record<string, any>;
  fieldMap: Record<string, string>;       // Maps your form keys to Zoho field names
  hiddenFields: Record<string, string>;   // Dynamic Zoho-specific hidden values
  toast: (input: { title: string; description: string; variant?: 'destructive' }) => void;
  onSuccess?: () => void;
  onError?: () => void;
}

export const submitToZoho = async ({
  data,
  fieldMap,
  hiddenFields,
  toast,
  onSuccess,
  onError,
}: SubmitToZohoProps) => {
  const zohoEndpoint = "https://crm.zoho.in/crm/WebToContactForm";
  const formData = new FormData();

  // Attach dynamic hidden fields (Zoho-specific)
  Object.entries(hiddenFields).forEach(([key, value]) => {
    formData.append(key, value);
  });

  // Attach visible form field values based on the fieldMap
  Object.entries(fieldMap).forEach(([formKey, zohoFieldKey]) => {
    const val = data[formKey];
    if (val !== undefined) {
      formData.append(zohoFieldKey, val);
    }
  });

  try {
    await axios.post(zohoEndpoint, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    toast({
      title: 'Form submitted successfully!',
      description: 'Thank you for your interest. Our team will contact you shortly.',
    });

    if (onSuccess) onSuccess();
  } catch (err) {
    console.error('Zoho form error:', err);
    toast({
      title: 'Form submission failed!',
      description: 'Something went wrong. Please try again later.',
      variant: 'destructive',
    });
    if (onError) onError();
  }
};
