import { getTranslations } from "next-intl/server";
import styles from "./OrganizersSection.module.css";

export async function OrganizersSection() {
  const t = await getTranslations("organizers");

  const starPositions: { left: string; top: string; delay: string }[] = [
    { left: "20%", top: "12%", delay: "0s" }, // #1
    { left: "85%", top: "20%", delay: "0.4s" }, // #2
    { left: "70%", top: "70%", delay: "0.8s" }, // #3
    { left: "10%", top: "75%", delay: "0.2s" }, // #4
    { left: "90%", top: "80%", delay: "0.6s" }, // #5
  ];

  return (
    <section className={styles.section} aria-labelledby="organizers-title">
      <div className={styles.starsLayer} aria-hidden>
        {starPositions.map((pos, i) => (
          <span
            key={i}
            className={styles.star}
            style={{
              left: pos.left,
              top: pos.top,
              animationDelay: pos.delay,
            }}
          />
        ))}
      </div>
      <div className={styles.content}>
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
      </div>
    </section>
  );
}