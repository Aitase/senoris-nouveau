import { NextRequest, NextResponse } from 'next/server';

const resendApiKey = process.env.RESEND_API_KEY;
const audienceId = process.env.RESEND_NEWSLETTER_AUDIENCE_ID;

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email invalide.' }, { status: 400 });
    }

    if (!resendApiKey || !audienceId) {
      return NextResponse.json(
        { error: 'Configuration newsletter incomplète.' },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://api.resend.com/audiences/${audienceId}/contacts`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      }
    );

    const payload = await response.json();

    if (!response.ok) {
      const message =
        (payload && typeof payload.message === 'string' && payload.message) ||
        "Impossible de finaliser l'inscription à la newsletter.";
      return NextResponse.json({ error: message }, { status: response.status });
    }

    return NextResponse.json(
      { success: true, message: 'Inscription newsletter confirmée.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscribe error:', error);
    return NextResponse.json({ error: 'Erreur interne du serveur.' }, { status: 500 });
  }
}

