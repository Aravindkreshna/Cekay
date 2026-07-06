"use client";

import { useState } from "react";

const initialState = {
  name: "",
  company: "",
  role: "",
  email: "",
  phone: "",
  type: "Brand Film",
  budget: "₹3L-₹7L",
  message: "",
  source: "LinkedIn"
};

export function ContactForm() {
  const [status, setStatus] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState(initialState);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    setIsSubmitting(false);

    if (response.ok) {
      setStatus(
        "We've received your brief. Expect a real human response within 24 hours."
      );
      setForm(initialState);
      return;
    }

    setStatus("Something went wrong. Please try again or contact us directly.");
  }

  return (
    <form className="panel grid gap-5 rounded-[2rem] p-8" onSubmit={handleSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Your Name *">
          <input
            required
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
          />
        </Field>
        <Field label="Brand / Company Name *">
          <input
            required
            value={form.company}
            onChange={(event) => setForm({ ...form, company: event.target.value })}
          />
        </Field>
        <Field label="Your Role">
          <input
            value={form.role}
            onChange={(event) => setForm({ ...form, role: event.target.value })}
          />
        </Field>
        <Field label="Email *">
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
          />
        </Field>
        <Field label="Phone / WhatsApp *">
          <input
            required
            value={form.phone}
            onChange={(event) => setForm({ ...form, phone: event.target.value })}
          />
        </Field>
        <Field label="Type of Film">
          <select
            value={form.type}
            onChange={(event) => setForm({ ...form, type: event.target.value })}
          >
            <option>Brand Film</option>
            <option>Launch</option>
            <option>Corporate</option>
            <option>Not Sure</option>
          </select>
        </Field>
        <Field label="Rough Budget Range">
          <select
            value={form.budget}
            onChange={(event) => setForm({ ...form, budget: event.target.value })}
          >
            <option>Under ₹3L</option>
            <option>₹3L-₹7L</option>
            <option>₹7L-₹15L</option>
            <option>₹15L+</option>
            <option>Let's Discuss</option>
          </select>
        </Field>
        <Field label="How did you hear about us?">
          <select
            value={form.source}
            onChange={(event) => setForm({ ...form, source: event.target.value })}
          >
            <option>LinkedIn</option>
            <option>Instagram</option>
            <option>Referral</option>
            <option>Google Search</option>
            <option>Other</option>
          </select>
        </Field>
      </div>
      <Field label="Tell us about your brand and what you need">
        <textarea
          rows={6}
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
        />
      </Field>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-black transition hover:opacity-90 disabled:opacity-60"
        >
          {isSubmitting ? "Sending..." : "Start the Conversation →"}
        </button>
        {status ? <p className="text-sm text-[var(--muted)]">{status}</p> : null}
      </div>
    </form>
  );
}

function Field({
  label,
  children
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm text-[var(--muted)]">
      <span>{label}</span>
      <div className="[&>input]:w-full [&>input]:rounded-2xl [&>input]:border [&>input]:border-white/10 [&>input]:bg-black/40 [&>input]:px-4 [&>input]:py-3 [&>input]:text-white [&>select]:w-full [&>select]:rounded-2xl [&>select]:border [&>select]:border-white/10 [&>select]:bg-black/40 [&>select]:px-4 [&>select]:py-3 [&>select]:text-white [&>textarea]:w-full [&>textarea]:rounded-[1.5rem] [&>textarea]:border [&>textarea]:border-white/10 [&>textarea]:bg-black/40 [&>textarea]:px-4 [&>textarea]:py-3 [&>textarea]:text-white">
        {children}
      </div>
    </label>
  );
}
