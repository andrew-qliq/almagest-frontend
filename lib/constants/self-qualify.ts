export interface SelfQualifyCardContent {
  label: string;
  title: string;
  items: readonly string[];
  positive: boolean;
}

export interface SelfQualifyContent {
  subtitle: string;
  title: string;
  description: string;
  cards: readonly SelfQualifyCardContent[];
}

export const LEARNING_PATH_SELF_QUALIFY: SelfQualifyContent = {
  subtitle: "Self-Qualify",
  title: "Is this the right path for you?",
  description:
    "An honest filter, so the right people begin and the wrong expectations do not.",
  cards: [
    {
      label: "For You",
      title: "You value depth over noise.",
      items: [
        "You want durable mental models",
        "You are willing to question assumptions",
        "You prefer education to prediction",
      ],
      positive: true,
    },
    {
      label: "Not For You",
      title: "You want shortcuts or signals.",
      items: [
        "Guaranteed returns",
        "Trading calls or hype",
        "Passive consumption without application",
      ],
      positive: false,
    },
  ],
};

export const COMMUNITY_ACCESS_SELF_QUALIFY: SelfQualifyContent = {
  subtitle: "Membership & Access",
  title: "What is open, and what is for members.",
  description:
    "Free resources stay open to everyone. The deeper experience is reserved for enrolled learners.",
  cards: [
    {
      label: "Open Access",
      title: "Available to everyone.",
      items: [
        "WhatsApp broadcast",
        "Journal articles and the briefing",
        "Free introduction sessions",
      ],
      positive: true,
    },
    {
      label: "Members",
      title: "For enrolled learners.",
      items: [
        "Member discussion community",
        "Priority access to Dubai gatherings",
        "Course-specific cohorts",
      ],
      positive: true,
    },
  ],
};

export const FOUNDATION_SELF_QUALIFY: SelfQualifyContent = {
  subtitle: "Who This Is For",
  title: "Ambitious, thoughtful and ready to engage.",
  description: "",
  cards: [
    {
      label: "For You",
      title: "You want structured understanding.",
      items: [
        "Professionals seeking context",
        "Entrepreneurs making long-term decisions",
        "Investors building financial literacy",
        "Leaders navigating structural change",
      ],
      positive: true,
    },
    {
      label: "Not For You",
      title: "You want shortcuts or signals.",
      items: [
        "Guaranteed returns or predictions",
        "Trading calls or investment advice",
        "Passive consumption without application",
      ],
      positive: false,
    },
  ],
};
