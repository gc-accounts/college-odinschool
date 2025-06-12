import React, { useState, useEffect } from 'react'
import { Button } from '@/components/components/ui/button';
import Modal from '../component-template/Modal';
import DynamicForm from '../form/DynamicForm';
import axios from 'axios';
import { useToast } from '@/components/hooks/use-toast';
import { FieldConfig } from '../form/DynamicForm';
import { useRouter } from 'next/navigation';
import { getUTMTrackingData } from '@/components/utils/getUTMTrackingData';
interface RequestCallbackProps {
    slug: String,
    buttonText?: String,
}



const formFields: FieldConfig[] = [
    {
        name: 'firstName',
        label: 'First Name',
        type: 'text',
        required: true,
        rules: { required: 'First Name is required' },
    },
    {
        name: 'lastName',
        label: 'Last Name',
        type: 'text',
        required: true,
        rules: { required: 'Last Name is required' },
    },
    {
        name: 'email',
        label: 'Email',
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
        label: 'Phone',
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
        name: 'year',
        label: 'Year of Graduation',
        type: 'select',
        options: ['Before 2018', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', 'After 2025'],
        rules: { required: 'Please select your graduation year' },
    },
    {
        name: 'experience',
        label: 'Work Experience Level',
        type: 'select',
        options: ['No Experience', '0-1 Years', '1-3 Years', '3+ Years'],
        rules: { required: 'Please select your experience level' },
    },
    { name: 'program', type: 'hidden' },
    { name: 'ga_client_id', type: 'hidden' },
];

const RequestCallback = ({ slug, buttonText }: RequestCallbackProps) => {

    const [formOpen, setFormOpen] = useState(false);
    const [utmData, setUtmData] = useState<Record<string, string>>({});

    const { toast } = useToast();
    const router = useRouter()


    useEffect(() => {
        const trackingData = getUTMTrackingData();
        setUtmData(trackingData);
        sessionStorage.setItem('utmTracking', JSON.stringify(trackingData));

    }, []);


    // Handle Form Submit
    const handleFormSubmit = async (data: any) => {
        console.log('request callback data------------------------', data);

        const zohoEndpoint = "https://crm.zoho.in/crm/WebToContactForm";

        const hiddenFields = {
            xnQsjsdp: "b3f43adc4710a41efc03cab70d04a5eee598f225642df4a1f565782c83a02d3a",
            xmIwtLD: "a2deb9be306e58e854a1535496bd061b69e1d5dd0efc44a28ae5ee26dfe42b099e51cbb9f06e7317ab708b49c270667a",
            actionType: "Q29udGFjdHM=",
            returnURL: "null",
        };

        const formData = new FormData();

        // Append hidden fields
        Object.entries(hiddenFields).forEach(([key, value]) => {
            formData.append(key, value);
        });

        // Append visible form data
        formData.append("First Name", data.firstName || '');
        formData.append("Last Name", data.lastName || '');
        formData.append("Email", data.email || '');
        formData.append("Phone", data.phone || '');
        formData.append("Year of Graduation", data.year || '');
        formData.append("Work Experience Level", data.experience || '');
        formData.append("Program", data.program);
        formData.append("ga_client_id", '');
        formData.append("Business Unit", 'OdinSchool');
        formData.append("Source Domain", 'Odinschool Course')

        // UTM Tracking 
        formData.append("Source Domain", 'Odinschool Home Page')
        formData.append('First Page Seen', utmData['First Page Seen'] || '');
        formData.append('Original Traffic Source', utmData['Original Traffic Source'] || '');
        formData.append('Original Traffic Source Drill-Down 1', utmData['Original Traffic Source Drill-Down 1'] || '');
        formData.append('Original Traffic Source Drill-Down 2', utmData['Original Traffic Source Drill-Down 2'] || '');
        formData.append('UTM Term-First Page Seen', utmData['UTM Term-First Page Seen'] || '');
        formData.append('UTM Content-First Page Seen', utmData['UTM Content-First Page Seen'] || '');

        try {
            const response = await axios.post(zohoEndpoint, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            // ✅ Store email and redirect
            sessionStorage.setItem('submittedEmail', data.email);


            toast({
                title: "Form submitted successfully!",
                description: "Thank you for your interest. Our team will contact you shortly.",
            });

            // ✅ Redirect to thank-you page with specific course route 
            const courseSlug = slug || '';
            setTimeout(() => {
                router.push(`/thank-you?title=${courseSlug}`);
            }, 1000);



        } catch (err) {
            console.error('Error submitting form:', err);

            toast({
                title: "Form submission failed!",
                description: "Something went wrong. Please try again later.",
                variant: "destructive"
            });
        }

        setFormOpen(false);
    };


    return (
        <>
            <div className="text-center">
                <Button variant='yellow' className={`${buttonText === 'Enroll Now' ? 'w-full' : ''}`} onClick={() => setFormOpen(true)}>
                    {buttonText ? buttonText : 'Request Callback'}
                </Button>
            </div>

            <Modal header_text={buttonText ? buttonText : 'Enquire Now'} open={formOpen} onOpenChange={setFormOpen}>
                <DynamicForm
                    fields={formFields}
                    buttonText={buttonText ? buttonText : 'Request Callback'}
                    initialValues={{
                        program: slug,
                        ga_client_id: '',
                        business_unit: 'Odinschool'
                    }}
                    onSubmit={(data) => {
                        handleFormSubmit(data)
                    }}

                />
            </Modal>
        </>
    )
}

export default RequestCallback