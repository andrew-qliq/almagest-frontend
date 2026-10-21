export interface PublicNavItem {
  label: string;
  href: string;
  dropdownAlign?: "left" | "right";
  children?: Array<{ label: string; href: string }>;
}

export const PUBLIC_NAV_LINKS: PublicNavItem[] = [
  { label: "Learning Path", href: "/learning-path" },
  {
    label: "Courses",
    href: "/courses/foundation",
    children: [
      { label: "Foundation", href: "/courses/foundation" },
      {
        label: "Bitcoin & Monetary Systems",
        href: "/courses/master-class/bitcoin-crypto",
      },
      // { label: "Frontier Tech", href: "/courses/master-class/frontier-tech" },
    ],
  },
  { label: "Insights", href: "/insights" },
  { label: "Community", href: "/community" },
  {
    label: "About",
    href: "/about",
    dropdownAlign: "right",
    children: [
      { label: "About the Academy", href: "/about" },
      { label: "Meet the Founder", href: "/founder" },
      { label: "Referral Partners", href: "/referral-partners" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Login",
    href: "/members/login",
    dropdownAlign: "right",
    children: [
      { label: "Member Login", href: "/members/login" },
      { label: "Partner Login", href: "/partners/login" },
    ],
  },
];

export const FOOTER_LINK_GROUPS = [
  {
    title: "Learn",
    links: [
      { label: "Learning Path", href: "/learning-path" },
      { label: "Foundation", href: "/courses/foundation" },
      { label: "Master Classes", href: "/courses" },
      { label: "Testimonials", href: "/testimonials" },
    ],
  },
  {
    title: "Academy",
    links: [
      { label: "About", href: "/about" },
      { label: "Meet the Founder", href: "/founder" },
      { label: "Insights", href: "/insights" },
      { label: "Community", href: "/community" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Partners",
    links: [
      { label: "Referral Partners", href: "/referral-partners" },
      { label: "Partner Terms", href: "/legal/partner-terms" },
      { label: "Partner Login", href: "/partners/login" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/legal/privacy" },
      { label: "Cookies", href: "/legal/cookies" },
      { label: "Terms & Refunds", href: "/legal/terms" },
      { label: "Data Requests", href: "/legal/data-requests" },
      {
        label: "Education Disclaimer",
        href: "/legal/virtual-asset-disclaimer",
      },
    ],
  },
] as const;
