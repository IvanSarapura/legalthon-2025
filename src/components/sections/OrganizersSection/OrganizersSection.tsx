import { getTranslations } from "next-intl/server";
import Image from "next/image";
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
          <Image
            src="/images/cardano-logo.png"
            alt={t("cardano")}
            width={80}
            height={80}
            className={styles.logoImage}
            sizes="(max-width: 768px) 65px, 80px"
          />
        </a>
        <a
          href="https://www.derecho.uba.ar/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.logoLink}
          aria-label={t("uba")}
        >
          <Image
            src="/images/uba-logo.png"
            alt={t("uba")}
            width={80}
            height={80}
            className={styles.logoImage}
            sizes="(max-width: 768px) 65px, 80px"
          />
        </a>
        <a
          href="https://www.fin.guru/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.logoLink}
          aria-label={t("finguru")}
        >
          <span className={styles.logoWithLabel}>
            <Image
              src="/images/FinGuru-logo.webp"
              alt=""
              width={80}
              height={80}
              className={`${styles.logoImage} ${styles.logoImageCircular}`}
              sizes="(max-width: 768px) 65px, 80px"
            />
            <span className={styles.logoLabel}>{t("finguru")}</span>
          </span>
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
          <Image
            src="/images/catalyst-logo.png"
            alt={t("catalyst")}
            width={80}
            height={80}
            className={styles.logoImage}
            sizes="(max-width: 768px) 65px, 80px"
          />
        </a>
      </div>
      </div>
    </section>
  );
}