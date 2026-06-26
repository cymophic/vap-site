"use client";

import { useState } from "react";
import { IconPlus, IconMinus } from "@tabler/icons-react";
import { cn } from "@/lib/utils/cn";

type FAQAnswerBlock =
  | { type: "text"; content: string }
  | { type: "list"; items: string[] };
type FAQ = {
  question: string;
  answer: string | FAQAnswerBlock[];
};
const faqs: FAQ[] = [
  {
    question: "Do you offer a flexible billing method?",
    answer:
      "Yes. We offer flexible billing options based on your business needs. Whether you require ongoing monthly support, hourly assistance, or project-based services, we can create a plan that fits your budget and workload. Our goal is to provide cost-effective solutions without compromising quality.",
  },
  {
    question: "What payment methods do you accept?",
    answer: [
      {
        type: "text",
        content:
          "We accept secure payments through several trusted platforms, including:",
      },
      {
        type: "list",
        items: [
          "PayPal",
          "Wise (formerly TransferWise)",
          "Other payment methods may be arranged depending on your location.",
        ],
      },
      {
        type: "text",
        content:
          "Invoices are provided for every payment to ensure complete transparency.",
      },
    ],
  },
  {
    question:
      "How do you ensure the security and confidentiality of client information?",
    answer: [
      {
        type: "text",
        content:
          "We understand that confidentiality is essential. We take data security seriously by following industry best practices, including:",
      },
      {
        type: "list",
        items: [
          "Signing Non-Disclosure Agreements (NDAs) upon request",
          "Keeping all client information strictly confidential",
          "Using secure password management practices",
          "Accessing client systems only through authorized accounts",
          "Working with trusted and secure cloud-based collaboration tools",
          "Never sharing, selling, or disclosing client information to third parties",
        ],
      },
      {
        type: "text",
        content:
          "Your business data is treated with the highest level of professionalism, security, and integrity.",
      },
    ],
  },
  {
    question: "What services do you offer?",
    answer: [
      {
        type: "text",
        content:
          "We provide a wide range of virtual assistant services, including:",
      },
      {
        type: "list",
        items: [
          "Executive Virtual Assistance",
          "Email & Calendar Management",
          "Social Media Management",
          "Graphic Design",
          "Video Editing",
          "CRM Management",
          "Project Management",
          "AI Content Creation & Automation",
        ],
      },
      {
        type: "text",
        content:
          "If you don't see the service you need, feel free to contact us. We'd be happy to discuss your requirements.",
      },
    ],
  },
  {
    question: "Do I need to sign a long-term contract?",
    answer:
      "No. We offer flexible service agreements with no long-term commitment required. You can hire us for a one-time project, short-term assistance, or ongoing support depending on your business needs.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "Most projects can begin within 1–5 business days, depending on availability and project requirements. After our initial consultation, we'll provide a timeline and onboarding process.",
  },
  {
    question: "Can you work with clients from different countries?",
    answer:
      "Absolutely. We work remotely with businesses and entrepreneurs worldwide. We communicate through email, Zoom, Google Meet, Slack, Microsoft Teams, WhatsApp, and other collaboration tools to ensure seamless communication regardless of location or time zone.",
  },
  {
    question: "Can I customize the services I need?",
    answer:
      "Yes. Every business is unique, so we offer customized solutions tailored to your goals. Whether you need a few hours of support each week or a dedicated virtual assistant, we'll create a package that works best for you.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section className="flex flex-col gap-12">
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
                {Array.isArray(faq.answer) ? (
                  <div className="text-zinc-500 leading-relaxed pb-6 space-y-3">
                    {faq.answer.map((block, j) =>
                      block.type === "list" ? (
                        <ul
                          key={j}
                          className="list-disc list-outside pl-10 space-y-1"
                        >
                          {block.items.map((item: string, k: number) => (
                            <li key={k}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p key={j}>{block.content}</p>
                      ),
                    )}
                  </div>
                ) : (
                  <p className="text-zinc-500 leading-relaxed pb-6">
                    {faq.answer}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
