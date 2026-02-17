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
        <a
          href="https://cardano.org/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.logoLink}
          aria-label={t("cardano")}
        >
          <img
            src="/images/cardano-logo.png"
            alt={t("cardano")}
            className={styles.logoImage}
          />
        </a>
        <a
          href="https://www.derecho.uba.ar/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.logoLink}
          aria-label={t("uba")}
        >
          <img
            src="/images/uba-logo.png"
            alt={t("uba")}
            className={styles.logoImage}
          />
        </a>
        <a
          href="https://www.fin.guru/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.logoLink}
          aria-label={t("finguru")}
        >
          <img
            src="/images/finguru-logo.png"
            alt={t("finguru")}
            className={styles.logoImage}
          />
        </a>
      </div>
      <h2 className={styles.title} id="support-title">
        {t("support")}
      </h2>
      <div className={styles.supportLogo} aria-label={t("support")}>
        <a
          href="https://projectcatalyst.io/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.logoLink}
          aria-label={t("catalyst")}
        >
          <img
            src="/images/catalyst-logo.png"
            alt={t("catalyst")}
            className={styles.logoImage}
          />
        </a>
      </div>
    </section>
  );
}