import { NextResponse } from 'next/server';

const REFRESH_TOKEN = "1000.dd8de605ce7e0481b7f961fcd338fd60.32c18f90f4fa215a9557907508b1e306";
const CLIENT_ID = "1000.057CL2TN3XBMZYGBXB2DRKBA8B2WDZ";
const CLIENT_SECRET = "079b006de2dd6c507aee1eb154a56234bdb52e0256";

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
      throw new Error('Failed to refresh token');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error refreshing token:', error);
    return NextResponse.json(
      { error: 'Failed to refresh token' },
      { status: 500 }
    );
  }
} 