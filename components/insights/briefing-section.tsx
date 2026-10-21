"use client";

import { FormEvent, useState } from "react";
import { MessageCircle } from "lucide-react";
import {
  getCountryCallingCode,
  isValidPhoneNumber,
  type Country,
  type Value,
} from "react-phone-number-input";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";
import { PhoneInput } from "@/components/ui/phone-input";

export function BriefingSection() {
  const [submittedForm, setSubmittedForm] = useState<
    "email" | "whatsapp" | null
  >(null);
  const [phoneNumber, setPhoneNumber] = useState<Value>();
  const [phoneCountry, setPhoneCountry] = useState<Country>("AE");
  const [phoneError, setPhoneError] = useState<string | null>(null);

  function handleSubmit(
    event: FormEvent<HTMLFormElement>,
    form: "email" | "whatsapp",
  ) {
    event.preventDefault();
    if (
      form === "whatsapp" &&
      (!phoneNumber || !isValidPhoneNumber(phoneNumber))
    ) {
      setPhoneError("Enter a valid WhatsApp number.");
      return;
    }
    setPhoneError(null);
    setSubmittedForm(form);
  }

  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-24 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_42%,rgba(31,73,111,0.48),transparent_48%)]"
      />
      <SectionContainer className="relative">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-24">
          <div>
            <Subtitle
              size="md"
              tone="white-muted"
              tracking="wider"
              weight="bold"
            >
              The Briefing
            </Subtitle>
            <h2 className="mt-5 font-heading text-[38px] font-medium leading-[1.08] tracking-[-0.045em] text-white sm:text-[48px] lg:text-[40px]">
              Perspective, without the noise.
            </h2>
            <p className="mt-5 max-w-3xl text-[15px] leading-7 text-white/55 sm:text-base">
              Join the editorial newsletter, the optional WhatsApp broadcast, or
              both. Unsubscribe at any time.
            </p>
          </div>

          <div className="space-y-7">
            <form onSubmit={(event) => handleSubmit(event, "email")}>
              <label
                htmlFor="briefing-email"
                className="text-sm font-semibold text-white"
              >
                Email address
              </label>
              <div className="mt-3 grid gap-3 sm:grid-cols-[minmax(0,1fr)_180px]">
                <div className="flex-1">
                  <input
                    id="briefing-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                    aria-describedby="briefing-email-hint"
                    className="h-12 w-full rounded-[3px] border border-white/20 bg-white px-4 text-navy outline-none transition-shadow invalid:not-placeholder-shown:ring-1 invalid:not-placeholder-shown:ring-red-500 focus:ring-2 focus:ring-gold"
                  />
                </div>
                <button
                  type="submit"
                  className="h-12 rounded-[3px] border border-gold bg-gold px-7 text-[11px] font-bold uppercase tracking-[0.16em] text-navy transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#d6b75c] hover:shadow-[0_9px_24px_rgba(201,168,76,0.28)]"
                >
                  Subscribe
                </button>
              </div>
              <p id="briefing-email-hint" className="sr-only">
                Enter a valid email address, for example name@example.com.
              </p>
              {submittedForm === "email" && (
                <p className="mt-2 text-xs text-gold">
                  Thank you. Your subscription request has been noted.
                </p>
              )}
            </form>

            <form onSubmit={(event) => handleSubmit(event, "whatsapp")}>
              <label
                htmlFor="briefing-whatsapp"
                className="text-sm font-semibold text-white"
              >
                WhatsApp number
              </label>
              <div className="mt-3 grid gap-3 sm:grid-cols-[minmax(0,1fr)_180px]">
                <PhoneInput
                  id="briefing-whatsapp"
                  name="whatsapp"
                  defaultCountry="AE"
                  international={false}
                  value={phoneNumber}
                  onCountryChange={(country) => {
                    if (country) setPhoneCountry(country);
                  }}
                  onChange={(value) => {
                    setPhoneNumber(value);
                    setPhoneError(null);
                  }}
                  required
                  aria-invalid={Boolean(phoneError)}
                  aria-describedby="briefing-phone-hint"
                  placeholder="Phone number"
                  className="h-12 w-full overflow-hidden rounded-[3px] border border-white/20 bg-white focus-within:ring-2 focus-within:ring-gold [&_[data-slot=button]]:h-full [&_[data-slot=button]]:rounded-none [&_[data-slot=button]]:border-0 [&_[data-slot=button]]:bg-transparent [&_[data-slot=button]]:px-4 [&_[data-slot=button]]:text-navy [&_[data-slot=button]]:shadow-none [&_[data-slot=input]]:h-full [&_[data-slot=input]]:rounded-none [&_[data-slot=input]]:border-0 [&_[data-slot=input]]:bg-transparent [&_[data-slot=input]]:px-2 [&_[data-slot=input]]:text-navy [&_[data-slot=input]]:shadow-none [&_[data-slot=input]]:ring-0"
                />
                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-[3px] border border-blue-600 bg-blue-600 px-5 text-[10px] font-bold uppercase tracking-[0.12em] text-white transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-[0_9px_24px_rgba(37,99,235,0.28)]"
                >
                  <MessageCircle
                    aria-hidden
                    className="h-5 w-5"
                    strokeWidth={1.8}
                  />
                  Join Broadcast
                </button>
              </div>
              <p id="briefing-phone-hint" className="sr-only">
                Select a country and enter a valid WhatsApp number.
              </p>
              <p className="mt-2 text-xs text-white/45" aria-live="polite">
                Full number submitted:{" "}
                {phoneNumber || `+${getCountryCallingCode(phoneCountry)} …`}
              </p>
              {phoneError && (
                <p className="mt-2 text-xs text-red-300">{phoneError}</p>
              )}
              {submittedForm === "whatsapp" && (
                <p className="mt-2 text-xs text-gold">
                  Thank you. Your broadcast request has been noted.
                </p>
              )}
            </form>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
