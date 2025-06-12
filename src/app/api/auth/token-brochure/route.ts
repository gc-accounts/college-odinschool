import { NextResponse } from 'next/server';

const REFRESH_TOKEN = "1000.afd301a865f9a5e4119cb8d7f1295af0.53ed5cb5514da621ebbf9f20f5295ed3";
const CLIENT_ID = "1000.7QE3VLHU967NKQU93FKMFGMQGVCT3H";
const CLIENT_SECRET = "aaedaa79975835c112dcb3ef34a51ed5aa1c8e60ef";

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
      throw new Error('Failed to refresh brochure token');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error refreshing brochure token:', error);
    return NextResponse.json(
      { error: 'Failed to refresh brochure token' },
      { status: 500 }
    );
  }
}
