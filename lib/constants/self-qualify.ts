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
