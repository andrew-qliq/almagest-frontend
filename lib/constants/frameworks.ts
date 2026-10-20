import {
  BookOpen,
  Compass,
  Cpu,
  Landmark,
  Scale,
  Target,
  type LucideIcon,
} from "lucide-react";

export interface FrameworkCardContent {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
  href: string;
}

export const FRAMEWORK_CARDS: FrameworkCardContent[] = [
  { icon: Landmark, number: "01", title: "Finance Knowledge", description: "Build a disciplined understanding of money, capital and value.", href: "/learning-path#pillar-01" },
  { icon: BookOpen, number: "02", title: "Macro-Economic History", description: "See today’s systems through the decisions that shaped them.", href: "/learning-path#pillar-02" },
  { icon: Cpu, number: "03", title: "Frontier Tech", description: "Study the technologies redefining institutions and opportunity.", href: "/learning-path#pillar-03" },
  { icon: Scale, number: "04", title: "Risk Appetite", description: "Develop frameworks for uncertainty, trade-offs and resilience.", href: "/learning-path#pillar-04" },
  { icon: Compass, number: "05", title: "New Opportunities", description: "Recognise structural change without chasing noise or hype.", href: "/learning-path#pillar-05" },
  { icon: Target, number: "06", title: "Taking Action", description: "Turn informed conviction into deliberate, responsible decisions.", href: "/learning-path#pillar-06" },
];
