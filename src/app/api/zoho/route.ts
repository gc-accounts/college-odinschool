import { NextResponse } from 'next/server';
import axios from 'axios';

const REFRESH_TOKEN = "1000.9610e09a6a7a1d160ff1b71e848ad575.807b0d1acb74af5c6d650e688295c8d5";
const CLIENT_ID = "1000.0OJAI0ZC0NIBXRX19IC6B14QE22HFT";
const CLIENT_SECRET = "ea6422637d7299fdb33bf7a62b41ad6465a851d12b";

// Handle OPTIONS request for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400',
    },
  });
}

async function getAccessToken() {
  try {
    const tokenEndpoint = "https://accounts.zoho.in/oauth/v2/token";
    const params = new URLSearchParams({
      refresh_token: REFRESH_TOKEN,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: 'refresh_token'
    });

    const response = await axios.post(tokenEndpoint, params.toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    if (response.data?.access_token) {
      return response.data.access_token;
    } else {
      throw new Error('Failed to get access token');
    }
  } catch (error) {
    console.error('Error refreshing token:', error);
    throw error;
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const accessToken = await getAccessToken();

    const zohoEndpoint = "https://crm.zoho.in/crm/v2/Contacts";

    const response = await axios.post(zohoEndpoint, formData, {
      headers: {
        'Authorization': `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'multipart/form-data'
      }
    });

    // Add CORS headers to the response
    return new NextResponse(JSON.stringify(response.data), {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Content-Type': 'application/json',
      },
    });
  } catch (error: any) {
    console.error('Error in Zoho API:', error);
    // Add CORS headers to error response as well
    return new NextResponse(
      JSON.stringify({ error: error.message || 'Failed to process request' }),
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          'Content-Type': 'application/json',
        },
      }
    );
  }
} 