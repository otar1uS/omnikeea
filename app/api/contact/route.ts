import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

type Payload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  topic?: string;
  message?: string;
  consent?: string;
};

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const required: (keyof Payload)[] = ['firstName', 'lastName', 'email', 'company', 'topic', 'message'];
  for (const k of required) {
    if (!body[k] || !String(body[k]).trim()) {
      return NextResponse.json({ error: `Missing field: ${k}` }, { status: 400 });
    }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email!)) {
    return NextResponse.json({ error: 'Invalid email.' }, { status: 400 });
  }
  if (body.consent !== 'on') {
    return NextResponse.json({ error: 'Consent required.' }, { status: 400 });
  }

  // Hook up an email/CRM provider here (Resend, Postmark, HubSpot, etc.).
  // Logged for now so the form is functional out of the box.
  console.log('[contact]', {
    name: `${body.firstName} ${body.lastName}`,
    email: body.email,
    company: body.company,
    topic: body.topic,
    message: body.message,
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
