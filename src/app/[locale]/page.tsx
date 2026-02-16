import { setRequestLocale } from "next-intl/server";
import {
  HeroSection,
  InnovationPathSection,
  FinalDocumentsSection,
  EventHighlightsSection,
  OrganizersSection,
} from "@/components/sections";
import styles from "../page.module.css";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HeroSection />
        <InnovationPathSection />
        <FinalDocumentsSection />
        <EventHighlightsSection />
        <OrganizersSection />
      </main>
    </div>
  );
}
