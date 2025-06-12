import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Received verification request:', body);

    // Convert to form-urlencoded format
    const formData = new URLSearchParams();
    formData.append('razorpay_payment_id', body.razorpay_payment_id);
    formData.append('razorpay_order_id', body.razorpay_order_id);
    formData.append('razorpay_signature', body.razorpay_signature);
    formData.append('razorpay_amount', body.razorpay_amount.toString());

    console.log('Making verification request with form data:', formData.toString());

    const response = await fetch('https://pay.greycampus.com/razorpay_signature_odin.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept': '*/*',
        'Origin': 'https://college.odinschool.com',
        'Referer': 'https://college.odinschool.com/checkout'
      },
      body: formData.toString()
    });

    console.log('Verification response status:', response.status);
    console.log('Verification response headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Verification error response:', errorText);
      throw new Error(`Failed to verify payment: ${response.status} ${errorText}`);
    }

    const paymentStatus = await response.text();
    console.log('Payment verification response:', paymentStatus);

    try {
      const parsedResponse = JSON.parse(paymentStatus);
      return NextResponse.json(parsedResponse);
    } catch (parseError) {
      console.error('Failed to parse verification response:', parseError);
      throw new Error('Invalid response format from payment verification');
    }
  } catch (error: unknown) {
    const errorDetails = error instanceof Error ? {
      name: error.name,
      message: error.message,
      stack: error.stack,
      cause: error.cause
    } : {
      message: String(error)
    };

    console.error('Detailed error in payment verification:', errorDetails);

    return NextResponse.json(
      {
        error: 'Failed to verify payment',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
} 