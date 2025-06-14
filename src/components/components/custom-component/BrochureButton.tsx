'use client'
import React, { useState } from 'react'
import Button from '@/components/components/Button'
import Modal from '@/components/components/component-template/Modal'
import PrimaryForm from '@/components/components/course-details/PrimaryForm'
import DynamicForm from '@/components/components/form/DynamicForm'
import brochureFormField from '@/components/data/brochureFormField'
import { useToast } from '@/components/hooks/use-toast';

interface BrochureButtonProps {
  slug: string
}

const BrochureButton = ({ slug }: BrochureButtonProps) => {
  const [formOpen, setFormOpen] = useState(false)
  const [brochureFormOpen, setBrochureFormOpen] = useState(false)
  const { toast } = useToast()

  // ✅ Handle Brochure Form Submission
  const handleBrochureFormSubmit = async (data: any, reset: () => void) => {
    try {
      const accessTokenRes = await fetch('/api/auth/token-brochure', { method: 'POST' })
      if (!accessTokenRes.ok) throw new Error('Token refresh failed')
      const { access_token } = await accessTokenRes.json()

      const brochureFormData = new FormData()
      brochureFormData.append('accessToken', access_token)
      brochureFormData.append('First Name', data.firstName)
      brochureFormData.append('Last Name', data.lastName)
      brochureFormData.append('Email', data.email)
      brochureFormData.append('Phone', data.phone)
      brochureFormData.append('StudentId', data.StudentId)
      brochureFormData.append('College Name', data.collegeName)
      brochureFormData.append('Other City', data.city)
      brochureFormData.append('College Year Of Graduation', data.year);
      brochureFormData.append('Program', 'Data Analyst');
      brochureFormData.append('College Programs', 'Data Analyst');
      brochureFormData.append('Ga_client_id', '');
      brochureFormData.append('Business Unit', 'Odinschool');

      brochureFormData.append('Source_Domain', 'Brochure Form')

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
