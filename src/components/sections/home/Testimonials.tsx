"use client";

import { useState, useEffect } from "react";
import { IconStarFilled } from "@tabler/icons-react";

type Testimonial = {
  quote: string;
  attribution: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Among the cream of the crop. Puts 100% effort into any project, and makes you feel like she cares about your project even more than you do.",
    attribution: "Daniel High, Software Training Professional",
    rating: 5,
  },
  {
    quote:
      "Did a great deal to help set up our database in Infusionsoft, CRM support, and MailChimp work. Could not have done it without her!",
    attribution: "Jane A. Herron, Coaching & Leadership Professional",
    rating: 5,
  },
  {
    quote:
      "Our VA has been AMAZING. Incredible communication skills, above average forward thinking, and extremely reliable. I highly recommend her!!!",
    attribution: "Tech Business Owner",
    rating: 5,
  },
  {
    quote:
      "A fantastic help when I needed it most. Great with social media and exceptionally good with design — takes initiative and has THE BEST attitude!",
    attribution: "Social Media & Design Client",
    rating: 5,
  },
  {
    quote: "Very skilled, loves her job, and knows how to meet deadlines.",
    attribution: "Entertainment & Events Company",
    rating: 5,
  },
  {
    quote:
      "Completed every task with excellent attention to detail and VERY promptly. Very happy with her level of communication.",
    attribution: "Research Client",
    rating: 5,
  },
  {
    quote:
      "Talented, patient, and attentive to minor details. She did such a great job, I ended up paying more than double our agreed price in bonuses. HIGHLY RECOMMENDED!",
    attribution: "E-commerce Client",
    rating: 5,
  },
  {
    quote:
      "Did great work for us. Although our need ended, I would re-hire her in a heartbeat. Dedicated, hard working, and friendly.",
    attribution: "CRM & Operations Client",
    rating: 5,
  },
  {
    quote:
      "Excellent VA. Smart and can figure things out on her own. Highly recommended.",
    attribution: "US-Based Business Owner",
    rating: 5,
  },
  {
    quote:
      "Always accessible, not once was she late responding, and always handled her job with tremendous attitude. Would I hire her again? Absolutely.",
    attribution: "Real Estate Company, Canada",
    rating: 5,
  },
  {
    quote:
      "Responsive, punctual, and delivered organized and accurate information. Would hire again!",
    attribution: "University Organization",
    rating: 5,
  },
  {
    quote:
      "Very professional, responds very quickly via email or Skype. Earns my highest recommendation!",
    attribution: "General VA Client",
    rating: 5,
  },
];

const CARDS_PER_PAGE = 2;
const totalPages = Math.ceil(testimonials.length / CARDS_PER_PAGE);

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 8000);
    return () => clearInterval(interval);
  }, [currentPage]);

  const visible = testimonials.slice(
    currentPage * CARDS_PER_PAGE,
    currentPage * CARDS_PER_PAGE + CARDS_PER_PAGE,
  );

  return (
    <section className="w-full flex flex-col gap-12">
      {/* Header */}
      <div className="flex flex-col gap-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
          Testimonials
        </p>
        <h2 className="-mt-2 text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
          What Clients Say
        </h2>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-6 items-stretch min-h-56">
        {visible.map((testimonial, i) => (
          <div
            key={i}
            className="flex-1 bg-white rounded-2xl border border-zinc-200 p-6 flex flex-col gap-4"
          >
            {/* Stars */}
            <div className="flex gap-0.5">
              {Array.from({ length: testimonial.rating }).map((_, j) => (
                <IconStarFilled key={j} size={16} className="text-orange-400" />
              ))}
            </div>
            {/* Quote */}
            <p className="text-zinc-600 leading-relaxed italic flex-1">
              &#34;{testimonial.quote}&#34;
            </p>
            {/* Divider */}
            <div className="w-full h-px bg-zinc-100" />
            {/* Attribution */}
            <p className="text-sm font-medium text-zinc-900">
              {testimonial.attribution}
            </p>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center items-center gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            aria-label={`Go to page ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === currentPage ? "w-5 bg-brand-accent" : "w-2.5 bg-zinc-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
