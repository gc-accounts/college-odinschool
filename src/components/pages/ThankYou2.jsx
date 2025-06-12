'use client';

import React, { useState, useEffect } from 'react';
import { BsCheck2Circle } from "react-icons/bs";
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/hooks/use-toast'; // ✅ Use OdinSchool's global toast

const degrees = ['B.Tech/B.E', 'Bsc', 'BBA', 'Bcom', 'BA', 'Other'];
const DegreesSpecialization = ['Computer science', 'IT', 'EEE', 'ECE', 'Civil', 'Mechanical', 'Aeronautical', 'Architecture', 'Agriculture', 'Mathematics', 'Statistics', 'Commerce', 'Other'];
const DegreeYearOfPassing = ['Before 2018', '2018', '2019', '2020', '2021', '2022', '2023', '2024', 'After 2024'];
const MasterDegreeYearOfPassingData = ['Before 2018', '2018', '2019', '2020', '2021', '2022', '2023', '2024', 'After 2024'];
const masterDegreeData = ['M.Tech/M.E', 'Msc', 'MBA', 'Mcom', 'Other'];
const masterDegreeSpecializationData = ['Computer science', 'IT', 'EEE', 'ECE', 'Civil', 'Mechanical', 'Aeronautical', 'Architecture', 'Agriculture', 'Mathematics', 'Statistics', 'Commerce', 'Other'];
const EmployementStatusData = ["Yes", "No", "Never Employed"];
const openToRelocateData = ["Yes", "No"];

const ThankYouForm = () => {
  const { toast } = useToast(); // ✅ use global toast
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", number: "", program: "", yearOfGraduation: '',
    currentLocation: '', knownLanguages: '', degree: '', degreeSpecialization: '',
    degreeCollegeName: "", degreePercentage: "", degreeYearOfPassing: '',
    masterDegree: "", masterDegreeSpecialization: "", masterDegreeCollegeName: "",
    masterDegreePercentage: "", masterDegreeYearOfPassing: "", PhdFieldOfStudy: "",
    PhdSpecialization: "", phd_university_name: "", EmployementStatus: "",
    openToRelocate: "", priorExprience: "", Source_Domain: "Odinschool Thankyou Form"
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchContactData = async () => {
      const email = sessionStorage.getItem('submittedEmail');
      if (!email) {
        router.push('/');
        return;
      }

      try {
        const res = await fetch(`/api/zoho/get-contact-by-email?email=${encodeURIComponent(email)}`);
        const data = await res.json();

        if (res.ok && data?.data?.length > 0) {
          const contact = data.data[0];
          setFormData((prev) => ({
            ...prev,
            email: contact.Email || '',
            firstName: contact.First_Name || '',
            lastName: contact.Last_Name || '',
            number: contact.Phone || '',
            program: contact.Program || '',
            yearOfGraduation: contact.Year_Of_Graduation || ''
          }));
        }
      } catch (err) {
        console.error('Error fetching Zoho contact:', err);
      }
    };

    fetchContactData();
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.currentLocation.trim()) newErrors.currentLocation = 'Please complete this required field.';
    if (!formData.knownLanguages.trim()) newErrors.knownLanguages = 'Please complete this required field.';
    if (!formData.EmployementStatus) newErrors.EmployementStatus = 'Please complete this required field.';
    if (!formData.openToRelocate) newErrors.openToRelocate = 'Please complete this required field.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch('/api/zoho/scholarship', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        toast({
          title: "Form submitted successfully!",
          description: "Thank you for filling the scholarship form. You will be contacted soon.",
        });

        sessionStorage.removeItem('submittedEmail');
        router.push('/');
      } else {
        toast({
          title: "Submission failed!",
          description: "Something went wrong. Please try again.",
          variant: "destructive"
        });
      }
    } catch (err) {
      toast({
        title: "Something went wrong.",
        description: "Please try again later.",
        variant: "destructive"
      });
    }

    setLoading(false);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="flex flex-col items-center mb-6">
          <div className="text-green-500 text-4xl bg-green-100 p-2 rounded-full">
            <BsCheck2Circle className='text-3xl' />
          </div>
          <h2 className="text-xl mt-2 text-center">
            <span className="font-bold">Thank You! Next step: Claim your Scholarship</span>
          </h2>
        </div>

        <h3 className="text-center text-md font-medium mb-4">
          Fill up the form to grab your Scholarship<br />before the offers close
        </h3>

        <div className="bg-white rounded-xl shadow max-w-2xl w-full p-6 h-[70vh] overflow-y-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="currentLocation" value={formData.currentLocation} onChange={handleChange} placeholder="Current Location*" className="w-full border px-4 py-2 rounded text-sm" />
            {errors.currentLocation && <p className="text-xs text-red-500">{errors.currentLocation}</p>}

            <input type="text" name="knownLanguages" value={formData.knownLanguages} onChange={handleChange} placeholder="Known Languages*" className="w-full border px-4 py-2 rounded text-sm" />
            {errors.knownLanguages && <p className="text-xs text-red-500">{errors.currentLocation}</p>}


            <div className='mt-2'>
              <h2 className='text-base pb-1 border-b border-gray-300 w-full mb-4'>Educational Qualifications (Part 1)</h2>
              <div className='space-y-4'>
                <select name="degree" value={formData.degree} onChange={handleChange} className="w-full border px-4 py-2 rounded text-sm bg-white text-black">
                  <option value="">Bachelor's Degree</option>
                  {degrees.map((deg, idx) => <option key={idx} value={deg}>{deg}</option>)}
                </select>

                <select name="degreeSpecialization" value={formData.degreeSpecialization} onChange={handleChange} className="w-full border px-4 py-2 rounded text-sm bg-white text-black">
                  <option value="">Bachelor's Degree Specialization</option>
                  {DegreesSpecialization.map((deg, idx) => <option key={idx} value={deg}>{deg}</option>)}
                </select>

                <input type="text" name="degreeCollegeName" value={formData.degreeCollegeName} onChange={handleChange} placeholder="Bachelor's Degree College Name" className="w-full border px-4 py-2 rounded text-sm" />
                <div className='grid grid-cols-2 gap-4'>
                  <input type="text" name="degreePercentage" value={formData.degreePercentage} onChange={handleChange} placeholder="Bachelor's Degree Percentage" className="w-full border px-4 py-2 rounded text-sm" />

                  <select name="degreeYearOfPassing" value={formData.degreeYearOfPassing} onChange={handleChange} className="w-full border px-4 py-2 rounded text-sm bg-white text-black">
                    <option value="">Bachelor's Degree Year of Passing</option>
                    {DegreeYearOfPassing.map((deg, idx) => <option key={idx} value={deg}>{deg}</option>)}
                  </select>
                </div>
              </div>
            </div>

            <div className='mt-2'>
              <h2 className='text-base pb-1 border-b border-gray-300 w-full mb-4'>Educational Qualifications (Part 2)</h2>

              <div className='space-y-4'>
                <select name="masterDegree" value={formData.masterDegree} onChange={handleChange} className="w-full border px-4 py-2 rounded text-sm bg-white text-black">
                  <option value="">Master's Degree</option>
                  {masterDegreeData.map((deg, idx) => <option key={idx} value={deg}>{deg}</option>)}
                </select>

                <select name="masterDegreeSpecialization" value={formData.masterDegreeSpecialization} onChange={handleChange} className="w-full border px-4 py-2 rounded text-sm bg-white text-black">
                  <option value="">Master's Degree Specialization</option>
                  {masterDegreeSpecializationData.map((deg, idx) => <option key={idx} value={deg}>{deg}</option>)}
                </select>

                <input type="text" name="masterDegreeCollegeName" value={formData.masterDegreeCollegeName} onChange={handleChange} placeholder="Master's Degree College Name" className="w-full border px-4 py-2 rounded text-sm" />
                <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                  <input type="text" name="masterDegreePercentage" value={formData.masterDegreePercentage} onChange={handleChange} placeholder="Master's Degree Percentage" className="w-full border px-4 py-2 rounded text-sm" />

                  <select name="masterDegreeYearOfPassing" value={formData.masterDegreeYearOfPassing} onChange={handleChange} className="w-full border px-4 py-2 rounded text-sm bg-white text-black">
                    <option value="">Master's Degree Year of Passing</option>
                    {MasterDegreeYearOfPassingData.map((deg, idx) => <option key={idx} value={deg}>{deg}</option>)}
                  </select>
                </div>
              </div>
            </div>

            <div className='mt-2'>
              <h2 className='text-base pb-1 border-b border-gray-300 w-full mb-4'>Educational Qualifications (Part 3)</h2>
              <div className='space-y-4'>

                <input type="text" name="PhdFieldOfStudy" value={formData.PhdFieldOfStudy} onChange={handleChange} placeholder="Ph.D. Field of Study" className="w-full border px-4 py-2 rounded text-sm" />
                <input type="text" name="PhdSpecialization" value={formData.PhdSpecialization} onChange={handleChange} placeholder="Ph.D. Specialization" className="w-full border px-4 py-2 rounded text-sm" />
                <input type="text" name="phd_university_name" value={formData.phd_university_name} onChange={handleChange} placeholder="Ph.D. Granting University/Institution" className="w-full border px-4 py-2 rounded text-sm" />
              </div>
            </div>

            <div className='mt-2'>
              <h2 className='text-base pb-1 border-b border-gray-300 w-full mb-4'>Employment Details</h2>

              <div className='space-y-4'>
                <select name="EmployementStatus" value={formData.EmployementStatus} onChange={handleChange} className="w-full border px-4 py-2 rounded text-sm bg-white text-black">
                  <option value="">Employment Status*</option>
                  {EmployementStatusData.map((deg, idx) => <option key={idx} value={deg}>{deg}</option>)}
                </select>
                {errors.EmployementStatus && <p className="text-xs text-red-500">{errors.EmployementStatus}</p>}


                <select name="openToRelocate" value={formData.openToRelocate} onChange={handleChange} className="w-full border px-4 py-2 rounded text-sm bg-white text-black">
                  <option value="">Open to Relocate?*</option>
                  {openToRelocateData.map((deg, idx) => <option key={idx} value={deg}>{deg}</option>)}
                </select>
                {errors.openToRelocate && <p className="text-xs text-red-500">{errors.openToRelocate}</p>}


                <div>
                  <label className='text-sm' htmlFor="priorExprience">Do you have any prior experience in any field?</label>
                  <textarea id='priorExprience' name="priorExprience" cols="30" value={formData.priorExprience} onChange={handleChange} className="w-full border px-4 py-2 rounded text-sm bg-white text-black" />
                </div>
              </div>

            </div>

            <button type="submit" disabled={loading} className="bg-blue-600 text-white py-3 w-full rounded-md text-sm font-semibold hover:bg-blue-700">
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ThankYouForm;
