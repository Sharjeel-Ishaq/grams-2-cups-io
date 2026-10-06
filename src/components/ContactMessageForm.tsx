"use client";

import { useState, type FormEvent } from "react";

type Props = {
  email: string;
  accent: string;
};

export default function ContactMessageForm({ email, accent }: Props) {
  const [openedEmail, setOpenedEmail] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const senderEmail = String(formData.get("email") ?? "").trim();
    const topic = String(formData.get("topic") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = topic ? `Grams2Cups contact: ${topic}` : "Grams2Cups contact";
    const body = [
      `Name: ${name}`,
      `Email: ${senderEmail}`,
      `Topic: ${topic || "General question"}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpenedEmail(true);
  }

  const inputClass =
    "mt-1.5 h-11 w-full rounded-xl border border-gray-200 bg-white px-3.5 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-[#02b875] dark:border-[#40534a] dark:bg-[#1c2924] dark:text-gray-100 dark:placeholder:text-gray-500";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="text-xs font-medium text-gray-700 dark:text-gray-200">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            required
            maxLength={100}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="text-xs font-medium text-gray-700 dark:text-gray-200">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            maxLength={254}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-topic" className="text-xs font-medium text-gray-700 dark:text-gray-200">
          Topic
        </label>
        <select id="contact-topic" name="topic" className={inputClass} defaultValue="">
          <option value="">Choose a topic (optional)</option>
          <option value="Conversion correction">Conversion correction</option>
          <option value="Ingredient suggestion">Ingredient suggestion</option>
          <option value="Question about measurements">Question about measurements</option>
          <option value="Website feedback">Website feedback</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="text-xs font-medium text-gray-700 dark:text-gray-200">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="How can we help?"
          required
          rows={6}
          maxLength={5000}
          className="mt-1.5 w-full resize-y rounded-xl border border-gray-200 bg-white px-3.5 py-3 text-sm leading-relaxed text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-[#02b875] dark:border-[#40534a] dark:bg-[#1c2924] dark:text-gray-100 dark:placeholder:text-gray-500"
        />
      </div>

      <button
        type="submit"
        className="flex min-h-11 w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#02b875] focus-visible:ring-offset-2"
        style={{ backgroundColor: accent }}
      >
        <span>{openedEmail ? "Open email app again" : "Send message"}</span>
        <i className="ri-arrow-right-line" aria-hidden="true" />
      </button>
      <p className="text-center text-xs leading-relaxed text-gray-500 dark:text-gray-400" role="status">
        {openedEmail
          ? "Your email app should open with the message ready to send."
          : "This form opens your email app; your message is sent only when you send the email."}
      </p>
    </form>
  );
}
