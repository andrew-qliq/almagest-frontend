import type { Metadata } from "next";
import { CommunityHeroSection } from "@/components/community/community-hero-section";
import { GatheringsSection } from "@/components/community/gatherings-section";
import { WhatsAppBroadcastSection } from "@/components/community/whatsapp-broadcast-section";
import { CommunityGuidelinesSection } from "@/components/community/community-guidelines-section";
import { JoinConversationSection } from "@/components/community/join-conversation-section";
import { SelfQualifySection } from "@/components/shared/self-qualify-section";
import { COMMUNITY_ACCESS_SELF_QUALIFY } from "@/lib/constants/self-qualify";

export async function generateMetadata(): Promise<Metadata> {
  const seo = {
    title: "Community | Almagest Academy",
    description:
      "A thoughtful global member experience grounded in education and brought together in Dubai.",
    ogImage: "/images/insights/hero-banner.jpg",
  };

  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
      images: [{ url: seo.ogImage }],
    },
  };
}

export default function CommunityPage() {
  return (
    <>
      <CommunityHeroSection />
      <WhatsAppBroadcastSection />
      <GatheringsSection />
      <SelfQualifySection
        content={COMMUNITY_ACCESS_SELF_QUALIFY}
        cardBackgrounds="all"
        background="white"
      />
      <CommunityGuidelinesSection />
      <JoinConversationSection />
    </>
  );
}
