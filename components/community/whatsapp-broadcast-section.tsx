"use client";

import { FormEvent, useState } from "react";
import { Check, MessageCircle } from "lucide-react";
import { isValidPhoneNumber, type Value } from "react-phone-number-input";
import { PhoneInput } from "@/components/ui/phone-input";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";

const BENEFITS = [
  "Roughly one message a week",
  "Leave at any time",
  "Your number is never shared",
] as const;

export function WhatsAppBroadcastSection() {
  const [phoneNumber, setPhoneNumber] = useState<Value>();
  const [message, setMessage] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!phoneNumber || !isValidPhoneNumber(phoneNumber)) {
      setMessage("Enter a valid WhatsApp number.");
      return;
    }
    setMessage("Thank you. Your broadcast request has been noted.");
  }

  return (
    <section
      id="whatsapp-broadcast"
      className="scroll-mt-24 bg-[#f8f5ef] py-20 sm:py-24 lg:py-28"
    >
      <SectionContainer>
        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20">
          <div className="max-w-2xl">
            <Subtitle size="md" tone="gold" tracking="wider" weight="bold">
              WhatsApp Broadcast
            </Subtitle>
            <h2 className="mt-5 font-heading text-[36px] font-medium leading-[1.08] tracking-[-0.045em] text-navy sm:text-[46px] lg:text-[40px]">
              Ideas worth your attention,
              <br /> delivered quietly.
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-navy/75 sm:text-base">
              An optional, low-volume broadcast with new articles, session
              announcements and course updates. No signals, no hype, no
              pressure.
            </p>
            <ul className="mt-8 space-y-5">
              {BENEFITS.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-4 text-navy/85"
                >
                  <Check
                    className="h-5 w-5 shrink-0 text-emerald-700"
                    strokeWidth={1.8}
                  />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="border border-slate-200 bg-white p-6 shadow-[0_18px_48px_rgba(13,27,42,0.07)] sm:p-10"
          >
            <h3 className="font-heading text-2xl font-medium text-navy sm:text-[28px]">
              Join the WhatsApp broadcast
            </h3>
            <div className="mt-7 space-y-6">
              <div>
                <label
                  htmlFor="community-name"
                  className="text-sm font-semibold text-navy"
                >
                  Name
                </label>
                <input
                  id="community-name"
                  name="name"
                  required
                  autoComplete="name"
                  className="mt-2 h-12 w-full border border-slate-300 bg-white px-4 text-navy outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                />
              </div>
              <div>
                <label
                  htmlFor="community-phone"
                  className="text-sm font-semibold text-navy"
                >
                  WhatsApp number
                </label>
                <PhoneInput
                  id="community-phone"
                  name="phone"
                  defaultCountry="AE"
                  international={false}
                  value={phoneNumber}
                  onChange={(value) => {
                    setPhoneNumber(value);
                    setMessage(null);
                  }}
                  required
                  placeholder="Phone number"
                  className="mt-2 h-12 w-full overflow-hidden border border-slate-300 bg-white focus-within:border-gold focus-within:ring-1 focus-within:ring-gold"
                />
              </div>
              <button
                type="submit"
                className="inline-flex h-12 w-full items-center justify-center gap-3 bg-gold px-6 text-[11px] font-bold uppercase tracking-[0.16em] text-navy transition-[box-shadow,transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#d6b75c] hover:shadow-[0_10px_28px_rgba(201,168,76,0.26)]"
              >
                <MessageCircle className="h-5 w-5" strokeWidth={1.8} />
                Join Broadcast
              </button>
            </div>
            {message && <p className="mt-4 text-sm text-navy/65">{message}</p>}
            <p className="mt-5 text-xs leading-5 text-navy/55">
              By joining you agree to receive broadcast messages and can opt out
              at any time.
            </p>
          </form>
        </div>
      </SectionContainer>
    </section>
  );
}
