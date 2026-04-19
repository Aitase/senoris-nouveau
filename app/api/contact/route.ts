import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

const resend = new Resend(process.env.RESEND_API_KEY);
const contactToEmail = process.env.CONTACT_TO_EMAIL ?? 'Senoris2026@gmail.com';
const contactFromEmail = process.env.CONTACT_FROM_EMAIL ?? 'SENORIS <onboarding@resend.dev>';

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont obligatoires.' },
        { status: 400 }
      );
    }

    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      req.headers.get('x-real-ip') ??
      null;
    const userAgent = req.headers.get('user-agent');

    const { error: dbError } = await supabaseAdmin
      .from('contact_messages')
      .insert({
        name,
        email,
        subject,
        message,
        ip,
        user_agent: userAgent,
      });

    if (dbError) {
      console.error('Supabase insert error:', dbError);
      return NextResponse.json(
        { error: "Impossible d'enregistrer votre message. Réessayez plus tard." },
        { status: 500 }
      );
    }

    const { error } = await resend.emails.send({
      from: contactFromEmail,
      to: [contactToEmail],
      replyTo: email,
      subject: `✉️ ${subject} — ${name} (Senoris)`,
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fdfaf7; border-radius: 16px; overflow: hidden; border: 1px solid #e8ddd3;">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #8b5a2b, #3b2313); padding: 36px 40px;">
            <h1 style="color: #ffffff; margin: 0; font-size: 1.6rem; font-weight: 900; letter-spacing: 2px;">SENORIS<span style="color: #c19a6b;">.</span></h1>
            <p style="color: rgba(253,250,247,0.7); margin: 8px 0 0; font-size: 0.85rem;">Nouveau message depuis le site web</p>
          </div>

          <!-- Body -->
          <div style="padding: 40px;">
            <div style="background: #ffffff; border-radius: 12px; padding: 24px; margin-bottom: 20px; border: 1px solid #e8ddd3;">
              <p style="color: #735d4f; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 6px; font-weight: 700;">Nom</p>
              <p style="color: #2b1f18; font-size: 1.05rem; font-weight: 600; margin: 0;">${name}</p>
            </div>

            <div style="background: #ffffff; border-radius: 12px; padding: 24px; margin-bottom: 20px; border: 1px solid #e8ddd3;">
              <p style="color: #735d4f; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 6px; font-weight: 700;">Email</p>
              <a href="mailto:${email}" style="color: #8b5a2b; font-size: 1.05rem; font-weight: 600; text-decoration: none;">${email}</a>
            </div>

            <div style="background: #ffffff; border-radius: 12px; padding: 24px; margin-bottom: 20px; border: 1px solid #e8ddd3;">
              <p style="color: #735d4f; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 6px; font-weight: 700;">Sujet</p>
              <p style="color: #2b1f18; font-size: 1.05rem; font-weight: 600; margin: 0;">${subject}</p>
            </div>

            <div style="background: #ffffff; border-radius: 12px; padding: 24px; border: 1px solid #e8ddd3;">
              <p style="color: #735d4f; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Message</p>
              <p style="color: #2b1f18; font-size: 1rem; line-height: 1.8; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>

            <!-- CTA -->
            <div style="margin-top: 32px; text-align: center;">
              <a href="mailto:${email}" style="display: inline-block; background: #8b5a2b; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 100px; font-weight: 700; font-size: 0.9rem;">
                Répondre à ${name} ↗
              </a>
            </div>
          </div>

          <!-- Footer -->
          <div style="background: #f5eee6; padding: 20px 40px; border-top: 1px solid #e8ddd3;">
            <p style="color: #735d4f; font-size: 0.75rem; margin: 0; text-align: center;">
              Message reçu via le formulaire de contact de <strong>senoris.net</strong>
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        {
          error:
            "Message enregistré, mais l'email n'a pas pu être envoyé. Vérifiez la configuration Resend (destinataire autorisé ou domaine vérifié).",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Merci pour votre message. L’équipe SENORIS vous répondra dans les meilleurs délais.",
      },
      { status: 200 }
    );

  } catch (err) {
    console.error('Unexpected error:', err);
    return NextResponse.json(
      { error: 'Erreur interne du serveur.' },
      { status: 500 }
    );
  }
}
