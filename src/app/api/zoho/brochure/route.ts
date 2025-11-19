import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const accessToken = formData.get('accessToken');

    if (!accessToken) {
      return NextResponse.json(
        { error: 'Access token is required' },
        { status: 400 }
      );
    }

    const contactData = {
      data: [{
        First_Name: formData.get('First Name'),
        Last_Name: formData.get('Last Name'),
        Email: formData.get('Email'),
        Phone: formData.get('Phone'),
        Year_Of_Graduation: formData.get('Year of Graduation'),
        Work_Experience_Level: formData.get('Work Experience Level'),

        // Application_ID: formData.get('StudentId'),
        // College_Name: formData.get('College Name'),
        // College_Year_Of_Graduation: formData.get('College Year Of Graduation'),

        
        Program: formData.get('Program'),
        College_Programs: formData.get('College Programs'),
        Ga_client_id: formData.get('ga_client_id'),
        Business_Unit: formData.get('Business Unit'),
        Source_Domain: formData.get('Source_Domain'),

        // user location 
        Other_City: formData.get('Other City'),
        Other_State: formData.get('Other_State'),

         // utm tracking details
        Latest_Page_Seen: formData.get('First Page Seen'),
        Latest_Traffic_Source:formData.get('Original Traffic Source'),
        Latest_Traffic_Source_Drill_Down_1: formData.get('Original Traffic Source Drill-Down 1'),
        Latest_Traffic_Source_Drill_Down_2: formData.get('Original Traffic Source Drill-Down 2'),
        UTM_Term_First_Page_Seen: formData.get('UTM Term-First Page Seen'),
        UTM_Content_First_Page_Seen: formData.get('UTM Content-First Page Seen'),
        ads_gclid:formData.get('ads_gclid'),

        duplicate_check_fields: ['Email']
      }],
      trigger: ['workflow']
    };

    const response = await fetch('https://www.zohoapis.in/crm/v2/Contacts/upsert', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to upsert contact');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Brochure API Error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal Server Error' },
      { status: 500 }
    );
  }
}
