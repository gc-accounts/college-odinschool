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
      grant_type: 'refresh_token'
    })
  });

  const data = await res.json();
  accessToken = data.access_token;
  return accessToken;
}

async function upsertContact(token, body) {
  const res = await fetch('https://www.zohoapis.in/crm/v2/Contacts/upsert', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: [
        {
          First_Name: body.firstName,
          Last_Name: body.lastName,
          Email: body.email,
          Phone: body.phone,
          Country: body.country || 'India',
          Year_Of_Graduation: body.year,
          Work_Experience_Level: body.experience,
          Program: body.program,
          Current_Location: body.currentLocation,
          Known_Languages: body.knownLanguages,
          Graduation_Degree: body.degree,
          Bachelor_Degree_College_Name: body.degreeSpecialization,
          Bachelor_Degree_Percentage: body.degreePercentage,
          Bachelor_Degree_Specialization: body.degreeSpecialization,
          Bachelor_Degree_Year_of_Passing_Dropdown: body.degreeYearOfPassing,
          Master_Degree_Dropdown: body.masterDegree,
          Master_Degree_Specialization_Dropdown: body.masterDegreeSpecialization,
          Master_Degree_College_Name: body.masterDegreeCollegeName,
          Master_Degree_Percentage: body.masterDegreePercentage,
          Master_Degree_Year_of_Passing_Dropdown: body.masterDegreeYearOfPassing,
          phd_university_name: body.PhdUniversityName,
          PhD_Degree: body.PhdFieldOfStudy,
          PhD_Degree_Specialization: body.PhdSpecialization,
          Employment_Status: body.EmployementStatus,
          Are_you_open_to_relocate: body.openToRelocate,
          Graduation_Degree: body.degree,
          Prior_Experience: body.priorExprience,
          Source_Domain: body.Source_Domain


        }
      ],
      duplicate_check_fields: ['Email'],
      trigger: ['workflow']
    }),
  });

  return res.json();
}

export async function POST(req) {
  try {
    const body = await req.json();

    let result = await upsertContact(accessToken, body);

    if (result?.code === 'INVALID_TOKEN' || result?.message === 'invalid oauth token') {
      const newToken = await refreshAccessToken();
      result = await upsertContact(newToken, body);
    }

    if (result?.data?.[0]?.code === 'SUCCESS' || result?.data?.[0]?.status === 'success') {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(JSON.stringify({ success: false, error: result }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
