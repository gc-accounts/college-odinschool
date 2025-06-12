const clientId = '1000.JBD8N32NFRHWLNYCZ1O6F7RFIC2MHQ';
const clientSecret = 'ee1d4b3c167a2704248c176fbe351dd8cc0461860a';
const refreshToken = '1000.8494c5fa6666d953d0008d12f8e53d26.6cc5ee4ffda10a997263156df574db59';
let accessToken = '1000.8283135f2f4b069f7c530f2ce5dbdc35.8ff9cab6028daba1d808c02f8a0cc8a8';

async function refreshAccessToken() {
  const res = await fetch('https://accounts.zoho.in/oauth/v2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      refresh_token: refreshToken,
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'refresh_token',
    }),
  });

  const data = await res.json();
  if (!data.access_token) throw new Error('Failed to refresh access token');
  accessToken = data.access_token;
  return accessToken;
}

async function getContactByEmail(email) {
  const url = `https://www.zohoapis.in/crm/v2/Contacts/search?criteria=(Email:equals:${email})`;

  const res = await fetch(url, {
    method: 'GET',
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  // Retry if unauthorized
  if (res.status === 401) {
    await refreshAccessToken();
    return getContactByEmail(email); // Retry with new token
  }

  const text = await res.text();

  try {
    return JSON.parse(text);
  } catch (err) {
    console.error('Zoho response was not valid JSON:', text);
    throw new Error('Zoho returned invalid response');
  }
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get('email');
  if (!email) {
    return new Response(JSON.stringify({ error: 'Missing email param' }), { status: 400 });
  }

  try {
    const data = await getContactByEmail(email);
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Failed to fetch contact:', error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
