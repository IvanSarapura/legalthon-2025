import { setRequestLocale } from "next-intl/server";
import {
  HeroSection,
  PhraseCarouselSection,
  InnovationPathSection,
  FinalDocumentsSection,
  JurySection,
  EventHighlightsSection,
  PressCoverageSection,
  OrganizersSection,
} from "@/components/sections";
import { Footer } from "@/components/layout";
import styles from "../page.module.css";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HeroSection />
        <PhraseCarouselSection />
        <InnovationPathSection />
        <FinalDocumentsSection />
        <JurySection />
        <EventHighlightsSection />
        <PressCoverageSection />
        <OrganizersSection />
        <Footer />
      </main>
    </div>
  );
}
