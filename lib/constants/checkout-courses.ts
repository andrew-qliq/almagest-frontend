export interface CheckoutCourse {
  slug: string;
  shortTitle: string;
  title: string;
  currency: "AED";
  /** Set a numeric AED price here when pricing is approved. */
  price: number | null;
  refundTerms: string;
}

export const CHECKOUT_COURSES: Record<string, CheckoutCourse> = {
  foundation: {
    slug: "foundation",
    shortTitle: "Foundation",
    title: "Foundation Course",
    currency: "AED",
    price: null,
    refundTerms: "Pending legal approval",
  },
  "master-class": {
    slug: "master-class",
    shortTitle: "Bitcoin & Monetary Systems",
    title: "Bitcoin & Monetary Systems Master Class",
    currency: "AED",
    price: null,
    refundTerms: "Pending legal approval",
  },
};

export function getCheckoutCourse(slug: string) {
  return CHECKOUT_COURSES[slug];
}

export function formatCheckoutPrice(course: CheckoutCourse) {
  if (course.price === null) return "Price pending";

  return new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: course.currency,
    maximumFractionDigits: 0,
  }).format(course.price);
}
