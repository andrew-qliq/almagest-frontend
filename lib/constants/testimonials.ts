export interface Testimonial {
  number: string;
  quote: string;
  name: string;
  role: string;
  location: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    number: "01",
    quote:
      "The Foundation programme finally gave me a clear framework for how money, debt and Bitcoin fit together. Structured, calm and free of hype.",
    name: "Learner name",
    role: "Foundation graduate",
    location: "Dubai",
  },
  {
    number: "02",
    quote:
      "I came for the Bitcoin module and stayed for the macroeconomics. The depth of the material is closer to a university seminar than an online course.",
    name: "Learner name",
    role: "Entrepreneur",
    location: "Abu Dhabi",
  },
  {
    number: "03",
    quote:
      "Clear, disciplined and honest about risk. It changed how I think about long-term wealth and decision-making in my business.",
    name: "Learner name",
    role: "Executive",
    location: "London",
  },
];
