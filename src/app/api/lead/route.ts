import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Server-side validation
    if (!body.email || !body.email.includes('@') || !body.name || !body.company) {
      return NextResponse.json(
        { error: 'Missing or invalid required fields' },
        { status: 400 }
      );
    }
    
    // Here is where you integrate with your CRM, Airtable, or email API (like Resend).
    // For now, we log it so it appears in the Vercel/server logs securely.
    console.log('[NEW LEAD CAPTURED]:', body);

    // Simulated processing delay to show loading state naturally
    await new Promise(resolve => setTimeout(resolve, 800));

    return NextResponse.json({ result: 'success', message: 'Lead captured successfully' });
  } catch (error) {
    console.error('Lead API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
