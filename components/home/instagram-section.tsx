import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";

const INSTAGRAM_POSTS = [
  { image: "/images/home/meet-the-founder.jpg", position: "center 24%" },
  { image: "/images/home/hero-banner.jpg", position: "18% center" },
  { image: "/images/home/community-banner.jpg", position: "center center" },
  { image: "/images/learning-path/hero-banner.jpg", position: "70% center" },
  { image: "/images/home/hero-banner.jpg", position: "88% center" },
] as const;

export function InstagramSection() {
  return (
    <section className="bg-[#f8f5ef] py-16 sm:py-20 lg:py-24">
      <SectionContainer>
        <div className="text-center">
          <Subtitle size="xs" tone="gold" tracking="wider" weight="bold">
            Beyond the Lessons
          </Subtitle>
          <h2 className="mt-5 font-heading text-[32px] font-medium leading-tight tracking-[-0.04em] text-navy sm:text-[40px]">
            Follow Us On Instagram
          </h2>
        </div>

        <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0 lg:grid-cols-5">
          {INSTAGRAM_POSTS.map((post, index) => (
            <Link
              key={`${post.image}-${index}`}
              href="#"
              aria-label={`View Instagram post ${index + 1}`}
              className="group relative aspect-square min-w-[74vw] snap-center overflow-hidden bg-slate-200 sm:min-w-0"
            >
              <Image
                src={post.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 74vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ objectPosition: post.position }}
              />
              <div className="absolute inset-0 bg-navy/10 transition-colors duration-300 group-hover:bg-navy/30" />
              <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-black/15 text-white backdrop-blur-[2px] transition-[background-color,transform] duration-300 group-hover:scale-110 group-hover:bg-gold group-hover:text-navy">
                <Play className="ml-0.5 h-5 w-5" strokeWidth={1.6} />
              </span>
            </Link>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
