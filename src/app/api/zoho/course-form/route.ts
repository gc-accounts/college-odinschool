export const runtime = "nodejs";          // ⬅ REQUIRED for CORS to work on Vercel
export const dynamic = "force-dynamic";   // ⬅ Prevents caching and ensures OPTIONS works

import { NextResponse } from "next/server";

// Allowed Webflow domain
const ALLOWED_ORIGIN = "https://odinschool-f5702c.webflow.io";

// CORS headers
function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
}

// OPTIONS — preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: corsHeaders(),
  });
}

// POST — Zoho submit
export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const accessToken = formData.get("accessToken");

    if (!accessToken) {
      return new NextResponse(
        JSON.stringify({ error: "Access token is required" }),
        { status: 400, headers: corsHeaders() }
      );
    }

    const getField = (name: string) => formData.get(name) || "";

    const contactData = {
      data: [
        {
          First_Name: getField("First Name"),
          Last_Name: getField("Last Name"),
          Email: getField("Email"),
          Phone: getField("Phone"),
          Year_Of_Graduation: getField('Year of Graduation'),
          Work_Experience_Level: getField('Work Experience Level'),
          // Application_ID: getField("StudentId"),
          // College_Name: getField("College Name"),
          // Other_City: getField("Other City"),
          // College_Year_Of_Graduation: getField("College Year Of Graduation"),
          Program: getField("Program"),
          College_Programs: getField("College Programs"),
          Ga_client_id: getField("Ga_client_id"),
          Business_Unit: getField("Business Unit"),
          Source_Domain: getField("Source_Domain"),
          Coupon_Code: formData.get("Coupon Code"),

          // User location
          Other_State: getField("Other_State"),

          // UTM fields
          Latest_Page_Seen: getField("First Page Seen"),
          Latest_Traffic_Source: getField("Original Traffic Source"),
          Latest_Traffic_Source_Drill_Down_1: getField(
            "Original Traffic Source Drill-Down 1"
          ),
          Latest_Traffic_Source_Drill_Down_2: getField(
            "Original Traffic Source Drill-Down 2"
          ),
          UTM_Term_First_Page_Seen: getField("UTM Term-First Page Seen"),
          UTM_Content_First_Page_Seen: getField("UTM Content-First Page Seen"),
          ads_gclid: formData.get("ads_gclid"),

          duplicate_check_fields: ["Email"],
        },
      ],
      trigger: ["workflow"],
    };

    console.log("Sending to Zoho:", JSON.stringify(contactData, null, 2));

    const zohoResponse = await fetch(
      "https://www.zohoapis.in/crm/v2/Contacts/upsert",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      }
    );

    const responseJSON = await zohoResponse.json();
    console.log("Zoho Response:", responseJSON);

    if (!zohoResponse.ok) {
      throw new Error(
        responseJSON.message || "Failed to create or update contact"
      );
    }

    return new NextResponse(JSON.stringify(responseJSON), {
      status: 200,
      headers: corsHeaders(),
    });
  } catch (error: any) {
    console.error("Error creating/updating contact:", error);

    return new NextResponse(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: corsHeaders(),
      }
    );
  }
}
