import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Received success request:', body);

    // Convert to form-urlencoded format
    const formData = new URLSearchParams();
    formData.append('name', body.name);
    formData.append('email', body.email);
    formData.append('phone', body.phone);
    formData.append('product_name', body.product_name);
    formData.append('response', body.response);

    console.log('Making success request with form data:', formData.toString());

    const response = await fetch('https://pay.greycampus.com/odin_success.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept': '*/*',
        'Origin': 'https://college.odinschool.com',
        'Referer': 'https://college.odinschool.com/checkout'
      },
      body: formData.toString()
    });

    console.log('Success response status:', response.status);
    console.log('Success response headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Success notification error response:', errorText);
      throw new Error(`Failed to process payment success: ${response.status} ${errorText}`);
    }

    const result = await response.text();
    console.log('Payment success response:', result);

    // Create payment status form data
    const paymentStatusFormData = new URLSearchParams();
    paymentStatusFormData.append('email', body.email);
    paymentStatusFormData.append('payment_status', 'Paid');
    paymentStatusFormData.append('payable_amount', body.payable_amount?.toString() || '0');
    paymentStatusFormData.append('paid_event_name', body.product_name);


    // Submit payment status form
    try {
      const statusResponse = await fetch('/api/payment-status', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: paymentStatusFormData.toString()
      });

      if (!statusResponse.ok) {
        console.error('Failed to submit payment status form');
      }
    } catch (statusError) {
      console.error('Error submitting payment status:', statusError);
    }

    return NextResponse.json({
      success: true,
      result,
      paymentStatusSubmitted: true
    });
  } catch (error: unknown) {
    const errorDetails = error instanceof Error ? {
      name: error.name,
      message: error.message,
      stack: error.stack,
      cause: error.cause
    } : {
      message: String(error)
    };

    console.error('Detailed error in payment success:', errorDetails);

    return NextResponse.json(
      {
        error: 'Failed to process payment success',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
} 