export const FOUNDATION_OUTCOMES = [
  "Explain how money, incentives and institutions interact",
  "Place current events within longer monetary and technological history",
  "Assess risk and uncertainty without relying on prediction",
  "Build a personal framework for long-term decisions",
];

export const BITCOIN_OUTCOMES = [
  "Explain how Bitcoin's monetary and technological layers interact",
  "Place Bitcoin within longer monetary and institutional history",
  "Assess network, adoption and market risks without relying on prediction",
  "Build a personal framework for evaluating Bitcoin developments",
];

export const FOUNDATION_FORMAT_FEATURES = [
  {
    icon: "play" as const,
    title: "Self-paced",
    description: "Self-paced video. Learn with the space to reflect and revisit.",
  },
  {
    icon: "users" as const,
    title: "Connected",
    description:
      "Member community: member discussion, optional WhatsApp broadcasts and future Dubai gatherings.",
  },
  {
    icon: "award" as const,
    title: "Recognised",
    description: "Complete the approved criteria toward certification.",
  },
];

export const BITCOIN_FORMAT_FEATURES = [
  {
    icon: "play" as const,
    title: "Advanced study",
    description: "A focused, self-paced Master Class with space to reflect and revisit.",
  },
  {
    icon: "users" as const,
    title: "Connected",
    description:
      "Learn alongside the member community with optional broadcasts and future gatherings.",
  },
  {
    icon: "award" as const,
    title: "Recognised",
    description: "Complete the approved Master Class criteria toward certification.",
  },
];

export const COURSE_INSTRUCTOR = {
  eyebrow: "Your Instructor",
  title: "Founder-led, institutionally framed.",
  name: "Marco Teora",
  role: "Founder, Quantum Leap Academy",
  biography:
    "Over two decades working across entrepreneurship, markets and technology, the Academy's founder built this programme to give serious learners a calm, structured way to understand money, incentives and long-term change.",
  tags: [
    "20+ years of experience",
    "Entrepreneur and educator",
    "Dubai based, globally minded",
  ],
  note: "Sample wording shown for layout. Replace with the approved biography before launch.",
  linkLabel: "Read the Founder Story",
  linkHref: "/founder",
  imageCaption: "Authentic portrait pending approved asset",
};

export const FOUNDATION_FAQS = [
  {
    question: "Who is Foundation for?",
    answer:
      "Foundation is for serious learners seeking structured context across money, incentives, systems and long-term change.",
  },
  {
    question: "What happens after I enrol?",
    answer:
      "You receive access to the self-paced course experience and the applicable member community resources.",
  },
  {
    question: "How do the Master Classes work?",
    answer:
      "Master Classes are focused specialisations that build on the shared concepts introduced in Foundation.",
  },
  {
    question: "Do I need previous knowledge?",
    answer:
      "No previous specialist knowledge is required. The course is designed to establish the shared starting point.",
  },
  {
    question: "Do I need to own crypto?",
    answer:
      "No. Foundation is educational and does not require you to purchase or hold any financial or digital asset.",
  },
  {
    question: "How does certification work?",
    answer:
      "A certificate records completed study after the approved course criteria have been met. It is not a professional qualification.",
  },
];

export const BITCOIN_FAQS = [
  {
    question: "Who is this Master Class for?",
    answer:
      "It is for serious learners who want to understand Bitcoin in its monetary, technological and macroeconomic context.",
  },
  {
    question: "What happens after I enrol?",
    answer:
      "You receive access to the self-paced Master Class and the applicable member community resources.",
  },
  {
    question: "Do I need to complete Foundation first?",
    answer:
      "Foundation is the recommended shared starting point, while final prerequisite requirements remain pending approval.",
  },
  {
    question: "Do I need previous Bitcoin knowledge?",
    answer: "No specialist knowledge is required, but the course moves into advanced context.",
  },
  {
    question: "Do I need to own Bitcoin?",
    answer:
      "No. The Master Class is educational and does not require you to purchase or hold Bitcoin or any other asset.",
  },
  {
    question: "How does certification work?",
    answer:
      "A certificate records completed study after the approved Master Class criteria have been met.",
  },
];

export const COURSE_PRICING_STATES = [
  {
    id: "unavailable",
    label: "Unavailable",
    price: "Price to be confirmed",
    description:
      "Final price, instalment options and provider details are pending approval.",
  },
  {
    id: "confirmed",
    label: "Confirmed",
    price: "AED X,XXX",
    description: "Mock fixture. One payment, full access.",
  },
  {
    id: "instalments",
    label: "Instalments",
    price: "3 × AED X,XXX",
    description: "Mock fixture. Spread the cost across three payments.",
  },
  {
    id: "promo",
    label: "Promo / referral",
    price: "AED X,XXX",
    description: "Mock fixture. Referral code applied: [CODE].",
  },
];
