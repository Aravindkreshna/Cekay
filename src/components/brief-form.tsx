"use client";

import { useState } from "react";
import { briefQuestions } from "@/lib/content";

type BriefState = Record<string, string>;

const initialBriefState = briefQuestions.reduce<BriefState>((acc, _, index) => {
  acc[`q${index + 1}`] = "";
  return acc;
}, {});

export function BriefForm() {
  const [answers, setAnswers] = useState<BriefState>(initialBriefState);
  const [status, setStatus] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");

    const response = await fetch("/api/brief", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(answers)
    });

    setStatus(
      response.ok
        ? "Thanks. Your discovery brief is in, and the team has been notified."
        : "We couldn't submit the brief right now. Please try again."
    );
  }

  return (
    <form onSubmit={handleSubmit} className="panel rounded-[2rem] p-8">
      <div className="grid gap-8">
        {briefQuestions.map((question, index) => {
          const key = `q${index + 1}`;

          return (
            <label key={key} className="grid gap-3">
              <span className="text-base text-white">
                {index + 1}. {question}
              </span>
              <textarea
                required
                rows={4}
                value={answers[key]}
                onChange={(event) =>
                  setAnswers({ ...answers, [key]: event.target.value })
                }
                className="rounded-[1.5rem] border border-white/10 bg-black/40 px-4 py-3 text-white"
              />
            </label>
          );
        })}
      </div>
      <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <button
          type="submit"
          className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-black"
        >
          Submit Discovery Form
        </button>
        {status ? <p className="text-sm text-[var(--muted)]">{status}</p> : null}
      </div>
    </form>
  );
}
