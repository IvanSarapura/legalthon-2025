import { getTranslations } from "next-intl/server";
import { Card } from "@/components/ui";
import styles from "./OrganizersSection.module.css";

export async function OrganizersSection() {
  const t = await getTranslations("organizers");

  return (
    <section className={styles.section} aria-labelledby="organizers-title">
      <h2 id="organizers-title" className={styles.subtitle}>
        {t("organize")}
      </h2>
      <div className={styles.organizersGrid}>
        <Card variant="small" className={styles.logoCard}>
          <span className={styles.placeholder}>{t("cardano")}</span>
        </Card>
        <Card variant="small" className={styles.logoCard}>
          <span className={styles.placeholder}>{t("uba")}</span>
        </Card>
        <Card variant="small" className={styles.logoCard}>
          <span className={styles.placeholder}>{t("finguru")}</span>
        </Card>
      </div>
      <h2 className={styles.subtitle}>{t("support")}</h2>
      <div className={styles.supporter}>
        <Card variant="small" className={styles.logoCard}>
          <span className={styles.placeholder}>{t("catalyst")}</span>
        </Card>
      </div>
      <footer className={styles.footer}>
        <small>{t("copyright")}</small>
      </footer>
    </section>
  );
}
