import React, { useEffect } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { CourseCertificateData } from '@/components/data/CourseCertificateData'
import { getDataByPage } from '@/components/utils/getDataByPage'

import Image from 'next/image'
const CourseCertificate = () => {
    const path = usePathname()
    const courseCertificateData = getDataByPage(CourseCertificateData, path)

     useEffect(() => {
        console.log('----------courseCertificateData---', courseCertificateData);
    
      })


    return (
        <div>
            <div className='mb-4'>
                <h3 className="text-2xl font-bold mb-2">Course Certificate</h3>
                <p className="text-gray-700">
                    {courseCertificateData && courseCertificateData.sub_title ? courseCertificateData.sub_title : ''}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-row-2 gap-8">
                <div>
                    <div className="space-y-2">
                        {
                            courseCertificateData && courseCertificateData.points?.map((point, index) => {
                                return (
                                    <div className="flex items-start gap-2" key={index}>
                                        <CheckCircle2 className="text-green-600 mt-1" size={18} />
                                        <p>{point}</p>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
                {
                    courseCertificateData?.certificate_img &&
                    <div className={`${courseCertificateData?.certificate_img.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'} grid gap-8 `}>
                        {
                            courseCertificateData?.certificate_img && courseCertificateData.certificate_img.map((img, index) => {
                                return (
                                    <div className="relative aspect-[16/12] mb-4" key={index}>
                                        <Image
                                            src={img && img}
                                            alt="Certificate Sample"
                                            className="rounded-lg border-2 border-gray-200 shadow-lg max-h-[25rem] object-cover"

                                            loading="lazy"
                                            width={500}
                                            height={500}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default CourseCertificate