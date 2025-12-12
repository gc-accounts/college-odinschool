export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

const REFRESH_TOKEN = "1000.9b4dbb55d16aadef9c61903e76ba2da4.69d48a051fedb7378621d7c54ec1fbda";
const CLIENT_ID = "1000.LPEX18DMS543XBXHSS34VO5R5M1N5I";
const CLIENT_SECRET = "9f7a181ed293e292212631402c822de38f04a6da7e";

const ALLOWED_ORIGIN = "https://college.odinschool.com";

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 200, headers: corsHeaders() });
}

export async function POST() {
  try {
    const response = await fetch("https://accounts.zoho.in/oauth/v2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        refresh_token: REFRESH_TOKEN,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: "refresh_token",
      }),
    });

    const data = await response.json();

    return new NextResponse(JSON.stringify(data), {
      status: 200,
      headers: corsHeaders(),
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Failed to refresh token" }),
      { status: 500, headers: corsHeaders() }
    );
  }
}
