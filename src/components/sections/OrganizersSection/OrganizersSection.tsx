import { Card } from "@/components/ui";
import styles from "./OrganizersSection.module.css";

export function OrganizersSection() {
  return (
    <section className={styles.section} aria-labelledby="organizers-title">
      <h2 id="organizers-title" className={styles.subtitle}>
        ORGANIZAN
      </h2>
      <div className={styles.organizersGrid}>
        <Card variant="small" className={styles.logoCard}>
          <span className={styles.placeholder}>Cardano</span>
        </Card>
        <Card variant="small" className={styles.logoCard}>
          <span className={styles.placeholder}>UBA</span>
        </Card>
        <Card variant="small" className={styles.logoCard}>
          <span className={styles.placeholder}>FinGurú</span>
        </Card>
      </div>
      <h2 className={styles.subtitle}>APOYA</h2>
      <div className={styles.supporter}>
        <Card variant="small" className={styles.logoCard}>
          <span className={styles.placeholder}>Project Catalyst</span>
        </Card>
      </div>
      <footer className={styles.footer}>
        <small>© 2025 Legalthon</small>
      </footer>
    </section>
  );
}
