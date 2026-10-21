export type CourseNextStepIcon = "book" | "compass" | "globe";

export interface CourseNextStep {
  icon: CourseNextStepIcon;
  title: string;
  description: string;
  label: string;
  href: string;
}

export const FOUNDATION_NEXT_STEPS: CourseNextStep[] = [
  {
    icon: "compass",
    title: "Bitcoin & Monetary Systems",
    description:
      "Understand Bitcoin in its technological, monetary and macroeconomic context.",
    label: "Explore Course",
    href: "/courses/master-class/bitcoin-crypto",
  },
  {
    icon: "globe",
    title: "See the full path",
    description: "Foundation, Master Classes and certificate in one view.",
    label: "Learning Path",
    href: "/learning-path",
  },
];

export const BITCOIN_NEXT_STEPS: CourseNextStep[] = [
  {
    icon: "book",
    title: "Return to the Foundation",
    description:
      "Revisit the shared grounding in money, systems, incentives and long-term thinking.",
    label: "Explore Foundation",
    href: "/courses/foundation",
  },
  {
    icon: "globe",
    title: "See the full path",
    description: "Foundation, Master Classes and certificate in one view.",
    label: "Learning Path",
    href: "/learning-path",
  },
];
