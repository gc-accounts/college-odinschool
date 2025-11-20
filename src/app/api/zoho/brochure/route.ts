import { NextResponse } from 'next/server';

const allowedOrigins = [
  "https://odinschool-f5702c.webflow.io",
  "https://preview.webflow.com",
  "https://webflow.io"
];

function corsResponse(data: any, origin: string | null, status = 200) {
  const res = NextResponse.json(data, { status });

  if (origin && allowedOrigins.includes(origin)) {
    res.headers.set("Access-Control-Allow-Origin", origin);
    res.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.headers.set("Access-Control-Allow-Headers", "Content-Type");
  }

  return res;
}

export async function OPTIONS(request: Request) {
  const origin = request.headers.get("origin");
  return corsResponse({}, origin);
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");

  try {
    const formData = await request.formData();
    const accessToken = formData.get('accessToken');

    if (!accessToken) {
      return corsResponse(
        { error: 'Access token is required' },
        origin,
        400
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

        Program: formData.get('Program'),
        College_Programs: formData.get('College Programs'),
        ga_client_id: formData.get('Ga_client_id'),
        Business_Unit: formData.get('Business Unit'),
        Source_Domain: formData.get('Source_Domain'),

        Other_City: formData.get('Other_City'),
        Other_State: formData.get('Other_State'),

        Latest_Page_Seen: formData.get('First Page Seen'),
        Latest_Traffic_Source: formData.get('Original Traffic Source'),
        Latest_Traffic_Source_Drill_Down_1: formData.get('Original Traffic Source Drill-Down 1'),
        Latest_Traffic_Source_Drill_Down_2: formData.get('Original Traffic Source Drill-Down 2'),
        UTM_Term_First_Page_Seen: formData.get('UTM Term-First Page Seen'),
        UTM_Content_First_Page_Seen: formData.get('UTM Content-First Page Seen'),
        ads_gclid: formData.get('ads_gclid'),

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
    return corsResponse(data, origin);

  } catch (error: any) {
    console.error('Brochure API Error:', error);
    return corsResponse(
      { error: error.message || 'Internal Server Error' },
      origin,
      500
    );
  }
}
