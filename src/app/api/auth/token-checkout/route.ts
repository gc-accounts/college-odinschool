import { NextResponse } from 'next/server';

const REFRESH_TOKEN = "1000.9610e09a6a7a1d160ff1b71e848ad575.807b0d1acb74af5c6d650e688295c8d5";
const CLIENT_ID = "1000.0OJAI0ZC0NIBXRX19IC6B14QE22HFT";
const CLIENT_SECRET = "ea6422637d7299fdb33bf7a62b41ad6465a851d12b";

export async function POST() {
  try {
    const response = await fetch('https://accounts.zoho.in/oauth/v2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        refresh_token: REFRESH_TOKEN,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'refresh_token',
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to refresh checkout token');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error refreshing checkout token:', error);
    return NextResponse.json(
      { error: 'Failed to refresh checkout token' },
      { status: 500 }
    );
  }
}
