'use client'
import React, { useState, useEffect } from 'react'
import Button from '@/components/components/Button'
import Modal from '@/components/components/component-template/Modal'
import PrimaryForm from '@/components/components/course-details/PrimaryForm'
import DynamicForm from '@/components/components/form/DynamicForm'
import brochureFormField from '@/components/data/brochureFormField'
import { getUTMTrackingData } from '@/components/utils/getUTMTrackingData'
import { useToast } from '@/components/hooks/use-toast';
import { pushToDataLayer } from '@/lib/gtm'
import { fetchUserLocation2 } from '@/components/utils/fetchUserLocation2' // updated for city/state
import { getGaCookieValue } from '@/components/utils/cookieUtils' // added for GA client

interface BrochureButtonProps {
  slug: string
}

const BrochureButton = ({ slug }: BrochureButtonProps) => {
  const [formOpen, setFormOpen] = useState(false)
  const [brochureFormOpen, setBrochureFormOpen] = useState(false)
  const [utm, setUtm] = React.useState<Record<string, string>>({});
  const [state, setState] = useState('')
  const [city, setCity] = useState('') // added for city
  const [GaClientId, setGaClientId] = useState('') // added for GA client id

  const { toast } = useToast()

  // Get location (city/state) and GA client id
  const getLocation = async () => {
    const location = await fetchUserLocation2();
    setCity(location.city)
    setState(location.region)
  }

  useEffect(() => {
    const data = getUTMTrackingData();
    setUtm(data);
    getLocation()
    const gaValue = getGaCookieValue(); // GA client id logic
    setGaClientId(gaValue);
  }, []);

  // ✅ Handle Brochure Form Submission
  const handleBrochureFormSubmit = async (data: any, reset: () => void) => {
    try {
      const accessTokenRes = await fetch('/api/auth/token-brochure', { method: 'POST' })
      if (!accessTokenRes.ok) throw new Error('Token refresh failed')
      const { access_token } = await accessTokenRes.json()

      const brochureFormData = new FormData()
      brochureFormData.append('accessToken', access_token);
      brochureFormData.append('First Name', data.firstName);
      brochureFormData.append('Last Name', data.lastName);
      brochureFormData.append('Email', data.email);

      // Extract country code (e.g., '+91 (India)' -> '+91')
      const countryCode = data.countryCodeValue.split(' ')[0];
      const fullPhoneNumber = countryCode + data.phone; // Concatenate country code and phone number
      brochureFormData.append('Phone', fullPhoneNumber);

      // brochureFormData.append('StudentId', data.StudentId);
      // brochureFormData.append('College Name', data.collegeName);
      // brochureFormData.append('Other City', data.city);
      // brochureFormData.append('College Year Of Graduation', data.year);

      brochureFormData.append('Country', data.countryCode);

      // ✅ Dynamic Program assignment
          const programName =
  slug === 'data-analyst-course' ? 'Data Analyst' :
  slug === 'ai-analyst-course' ? 'AI Analyst' :
  slug === 'investment-banking-finance-ops' ? 'College Investment Banking' :
  '';

      brochureFormData.append('Program', programName);
      brochureFormData.append('College Programs', programName);
      brochureFormData.append('Ga_client_id', GaClientId ? GaClientId : ''); // updated to get actual client id
      brochureFormData.append('Business Unit', 'Odinschool');
      brochureFormData.append('Source_Domain', 'Brochure Form');

      brochureFormData.append('Year of Graduation', data.year);
      brochureFormData.append('Work Experience Level', data.experience);

      // user location open (now both city & state)
      brochureFormData.append('Other_City', city); // added
      brochureFormData.append('Other_State', state);
      // user location close

      // Use the UTM data from state
      brochureFormData.append('First Page Seen', utm['First Page Seen'] || '');
      brochureFormData.append('Original Traffic Source', utm['Original Traffic Source'] || '');
      brochureFormData.append(
        'Original Traffic Source Drill-Down 1',
        utm['Original Traffic Source Drill-Down 1'] || ''
      );
      brochureFormData.append(
        'Original Traffic Source Drill-Down 2',
        utm['Original Traffic Source Drill-Down 2'] || ''
      );
      brochureFormData.append('UTM Term-First Page Seen', utm['UTM Term-First Page Seen'] || '');
      brochureFormData.append('UTM Content-First Page Seen', utm['UTM Content-First Page Seen'] || '');
      brochureFormData.append('ads_gclid', utm['ads_gclid'])

      const response = await fetch('/api/zoho/brochure', {
        method: 'POST',
        body: brochureFormData
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to submit brochure form')
      }

      toast({
        title: 'Brochure requested successfully!',
        description: 'Check your email shortly for the brochure.'
      })

      // --- START: Add GTM Data Layer Push Here ---
      pushToDataLayer('brochure_download_success', {
        eventName: 'brochure_download_modal',
        program_name: 'Data Analyst',
        user_email: data.email,
      });
      // --- END: Add GTM Data Layer Push Here ---

      reset() // ✅ Clear form fields
      setBrochureFormOpen(false)
    } catch (err) {
      console.error('Error submitting brochure form:', err)
      toast({
        title: 'Error!',
        description:
          err instanceof Error ? err.message : 'Submission failed. Try again later.',
        variant: 'destructive'
      })
    }
  }

  return (
    <div className='w-full flex md:flex-row flex-col md:gap-6 gap-2 justify-center items-center'>
      <Button
        className='bg-[#FFD600] border border-transparent hover:bg-[#FFD600] rounded-sm text-black text-lg px-4 py-3 outline-none focus:outline-none'
        onClick={() => setFormOpen(true)}
      >
        Request a callback
      </Button>

      <Modal header_text={'Request a callback'} open={formOpen} onOpenChange={setFormOpen}>
        <PrimaryForm buttonText='Request a Callback' slug={slug} isModal={true} sourceDomain='Course form' />
      </Modal>

      <Button
        className='bg-transparent border border-[#1a6cf7] rounded-sm text-[#1a6cf7] text-lg px-4 py-3 hover:bg-[#FFD600] hover:text-black hover:border-transparent outline-none focus:outline-none'
        onClick={() => setBrochureFormOpen(true)}
      >
        Download Brochure
      </Button>

      <Modal
        header_text={'Download Brochure'}
        open={brochureFormOpen}
        onOpenChange={setBrochureFormOpen}
      >
        <DynamicForm
          buttonText={'Download Brochure'}
          fields={brochureFormField}
          initialValues={{
            program: slug,
            ga_client_id: '',
            business_unit: 'Odinschool',
            Source_Domain: 'Brochure Form'
          }}
          onSubmit={async (data, reset) => {
            await handleBrochureFormSubmit(data, reset)
          }}
        />
      </Modal>
    </div>
  )
}

export default BrochureButton
