"use client";

import { useState } from "react";
import { IconPlus, IconMinus } from "@tabler/icons-react";
import { cn } from "@/lib/utils/cn";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What tools do you work with?",
    answer:
      "We work with a wide range of tools including WordPress, Notion, Google Workspace, Microsoft Office, Canva, Adobe Photoshop, CapCut, Camtasia, Zoho, Salesforce, and more. If you use something not on the list, just ask — we're quick to adapt.",
  },
  {
    question: "How do you communicate and give updates?",
    answer:
      "We keep communication open through email, chat, or phone — whichever works best for you. You'll receive regular updates on task progress so you're never left in the dark.",
  },
  {
    question: "What are your working hours?",
    answer:
      "Your timezone is our timezone. We're flexible and have experience working with clients across the US, Canada, New Zealand, and the UK.",
  },
  {
    question: "How do you handle revisions or mistakes?",
    answer:
      "We take ownership of our work. If something isn't right, we'll revise it promptly until you're satisfied — no hassle, no excuses.",
  },
  {
    question: "Do you work with one client at a time or multiple?",
    answer:
      "We work with multiple clients, but every client receives dedicated attention. Your tasks are treated with the same care and priority regardless of workload.",
  },
  {
    question: "Do you offer flexible billing?",
    answer:
      "Depending on your monthly needs, we offer both part-time and full-time virtual assistant services.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept bank transfers, wire transfers, and PayPal.",
  },
  {
    question: "How do you handle confidentiality?",
    answer:
      "We prioritize honesty and confidentiality above all. Your personal and business data is protected using up-to-date security practices, and any third parties we work with are held to the same standard.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section className="w-full mx-auto max-w-3xl flex flex-col gap-12">
      {/* Header */}
      <div className="flex flex-col gap-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
          FAQ
        </p>
        <h2 className="-mt-2 text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
          Frequently Asked Questions
        </h2>
      </div>

      {/* Accordion */}
      <div className="flex flex-col divide-y divide-zinc-200 border-y border-zinc-200">
        {faqs.map((faq, i) => (
          <div key={faq.question}>
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center py-6 text-left gap-4 group"
            >
              {/* Question */}
              <span
                className={cn(
                  "text-base font-semibold transition-colors group-hover:text-brand-accent",
                  openIndex === i
                    ? "text-brand-accent sm:text-zinc-800"
                    : "text-zinc-800",
                )}
              >
                {faq.question}
              </span>

              {/* Toggle Icon */}
              {openIndex === i ? (
                <IconMinus
                  size={18}
                  className="text-brand-accent md:text-zinc-800 shrink-0 group-hover:text-brand-accent"
                />
              ) : (
                <IconPlus
                  size={18}
                  className="text-zinc-400 shrink-0 group-hover:text-brand-accent"
                />
              )}
            </button>

            {/* Answer */}
            <div
              className={cn(
                "grid transition-all duration-300",
                openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="text-zinc-500 leading-relaxed pb-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
