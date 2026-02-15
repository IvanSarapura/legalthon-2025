import {
  HeroSection,
  InnovationPathSection,
  FinalDocumentsSection,
  EventHighlightsSection,
  OrganizersSection,
} from "@/components/sections";
import styles from "./page.module.css";

export default function Home() {
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
