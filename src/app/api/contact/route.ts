import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  type: string;
  budget: string;
  message: string;
  source: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;

  if (!payload.name || !payload.company || !payload.email || !payload.phone) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const webhookUrl = process.env.ZAPIER_CONTACT_WEBHOOK_URL;

  if (webhookUrl) {
    await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        formSource: "cekay-studio-contact-form",
        submittedAt: new Date().toISOString(),
        ...payload
      })
    });
  }

  return NextResponse.json({ ok: true });
}
