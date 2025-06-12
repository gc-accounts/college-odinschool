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
        Program: formData.get('Program'),
        Year_Of_Graduation: formData.get('Year of Graduation'),
        Ga_client_id: formData.get('Ga_client_id'),
        Business_Unit: formData.get('Business Unit'),
        Source_Domain: 'Checkout form',
        duplicate_check_fields: ['Email'],  // ✅ critical fix
        Coupon_Code: formData.get('Coupon Code')
      }],
      trigger: ['workflow']
    };

    const response = await fetch('https://www.zohoapis.in/crm/v2/Contacts/upsert', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to create or update contact');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error creating/updating contact:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to create or update contact' },
      { status: 500 }
    );
  }
}
