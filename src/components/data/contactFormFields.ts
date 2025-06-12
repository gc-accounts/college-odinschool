import { FieldConfig } from '@/components/components/form/DynamicForm';

const contactFormFields: FieldConfig[] = [
  {
    name: 'name',
    label: 'Name*',
    type: 'text',
    required: true,
    rules: { required: 'Name is required' },
  },
  {
    name: 'email',
    label: 'Email*',
    type: 'text',
    required: true,
    rules: {
      required: 'Email is required',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Invalid email format',
      },
    },
  },
  {
    name: 'phone',
    label: 'Phone*',
    type: 'text',
    required: true,
    rules: {
      required: 'Phone number is required',
      pattern: {
        value: /^[0-9]{10,12}$/,
        message: 'Phone number must be between 10 and 12 digits (numbers only)',
      },
    },
  },
  {
    name: 'program',
    label: 'Program*',
    type: 'select',
    options: [
      'Data Science Course',
      'Data Science Elite Course',
      'Certification Program in Applied Generative AI',
      'Generative AI Course',
      'Data Analyst',
      'AI Analyst',
    ],
    rules: { required: 'Please select a program' },
  },
  {
    name: 'description',
    label: 'Description',
    type: 'textarea',
    required: false,
  },
  { name: 'ga_client_id', type: 'hidden' },
  { name: 'business_unit', type: 'hidden' },
  { name: 'source_domain', type: 'hidden' }
];

export default contactFormFields;
