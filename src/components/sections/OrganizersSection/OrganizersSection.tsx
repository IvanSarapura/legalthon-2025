import { getTranslations } from "next-intl/server";
import styles from "./OrganizersSection.module.css";

export async function OrganizersSection() {
  const t = await getTranslations("organizers");

  return (
    <section className={styles.section} aria-labelledby="organizers-title">
      <h2 id="organizers-title" className={styles.title}>
        {t("organize")}
      </h2>
      <div className={styles.logosRow} role="list" aria-label={t("organize")}>
        <img
          src="/images/cardano-logo.png"
          alt={t("cardano")}
          className={styles.logoImage}
        />
        <img
          src="/images/uba-logo.png"
          alt={t("uba")}
          className={styles.logoImage}
        />
        <img
          src="/images/finguru-logo.png"
          alt={t("finguru")}
          className={styles.logoImage}
        />
      </div>
      <h2 className={styles.title} id="support-title">
        {t("support")}
      </h2>
      <div className={styles.supportLogo} aria-label={t("support")}>
        <img
          src="/images/catalyst-logo.png"
          alt={t("catalyst")}
          className={styles.logoImage}
        />
      </div>
    </section>
  );
}