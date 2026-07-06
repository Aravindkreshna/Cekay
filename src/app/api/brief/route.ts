import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const answers = (await request.json()) as Record<string, string>;

  if (!Object.values(answers).every((value) => value.trim().length > 0)) {
    return NextResponse.json({ error: "Please answer every question." }, { status: 400 });
  }

  const webhookUrl = process.env.ZAPIER_BRIEF_WEBHOOK_URL;

  if (webhookUrl) {
    await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        source: "cekay-studio-brief-form",
        submittedAt: new Date().toISOString(),
        answers
      })
    });
  }

  return NextResponse.json({ ok: true });
}
