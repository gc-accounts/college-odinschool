import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Received request body:', body);

    // Validate required fields
    if (typeof body.amount !== 'number' || body.amount <= 0) {
      console.error('Invalid amount:', body.amount);
      return NextResponse.json(
        { error: 'Invalid amount provided' },
        { status: 400 }
      );
    }

    // Convert to form-urlencoded format
    const formData = new URLSearchParams();
    formData.append('amount', body.amount.toString());

    // Log the request we're about to make
    console.log('Making request to GreyCampus with form data:', formData.toString());

    const response = await fetch('https://pay.greycampus.com/razorpay_odin.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept': '*/*',
        'Origin': 'https://college.odinschool.com',
        'Referer': 'https://college.odinschool.com/checkout'
      },
      body: formData.toString()
    });

    // Log the response status and headers
    console.log('GreyCampus response status:', response.status);
    console.log('GreyCampus response headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorText = await response.text();
      console.error('GreyCampus error response:', errorText);
      throw new Error(`Failed to create order: ${response.status} ${errorText}`);
    }

    const orderId = await response.text();
    console.log('Received order ID:', orderId);

    // Validate order ID
    if (!orderId || typeof orderId !== 'string') {
      throw new Error('Invalid order ID received from GreyCampus');
    }

    return NextResponse.json({ orderId });
  } catch (error: unknown) {
    // Enhanced error logging with type checking
    const errorDetails = error instanceof Error ? {
      name: error.name,
      message: error.message,
      stack: error.stack,
      cause: error.cause
    } : {
      message: String(error)
    };

    console.error('Detailed error in create-order:', errorDetails);

    return NextResponse.json(
      {
        error: 'Failed to create payment order',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
} 