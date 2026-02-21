import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Button } from "@/components/ui";
import styles from "./HeroSection.module.css";

const DOCUMENTS_ANCHOR = "#documentos-finales";

export async function HeroSection() {
  const t = await getTranslations("hero");

  const starPositions: { left: string; top: string; delay: string }[] = [
    { left: "12%", top: "18%", delay: "0s" }, // #1
    { left: "88%", top: "22%", delay: "0.4s" }, // #2
    { left: "25%", top: "35%", delay: "0.8s" }, // #3
    { left: "75%", top: "38%", delay: "0.2s" }, // #4
    { left: "12%", top: "55%", delay: "1.2s" }, // #5
    { left: "92%", top: "52%", delay: "0.6s" }, // #6
    { left: "39%", top: "23%", delay: "1s" }, // #7
    { left: "58%", top: "20%", delay: "0.3s" }, // #8
    { left: "18%", top: "72%", delay: "0.7s" }, // #9
    { left: "80%", top: "75%", delay: "0.5s" }, // #10
    { left: "35%", top: "50%", delay: "0.9s" }, // #11
    { left: "68%", top: "15%", delay: "0.1s" }, // #12
    { left: "5%", top: "42%", delay: "1.1s" }, // #13
    { left: "95%", top: "68%", delay: "0.15s" }, // #14
    { left: "63%", top: "82%", delay: "0.55s" }, // #15
    { left: "16%", top: "80%", delay: "0.55s" }, // #16
  ];

  return (
    <section className={styles.section} aria-label={t("ariaLabel")}>
      <div className={styles.backgroundImage}>
        <Image
          src="/images/JusticeGemini.png"
          alt=""
          fill
          priority
          quality={90}
          sizes="100vw"
          style={{ objectFit: "cover" }}
          aria-hidden="true"
        />
      </div>
      <div className={styles.opacityOverlay} aria-hidden />
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
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          <span className={styles.titleLine1}>{t("titleLine1")}</span>
          <span className={styles.titleLine2}>{t("titleLine2")}</span>
        </h1>
        <p className={styles.subtitle}>{t("subtitle")}</p>
        <p className={styles.subtitle}>{t("partners")}</p>
        <Button as="a" href={DOCUMENTS_ANCHOR} variant="cta" className={styles.cta}>
          {t("ctaDocuments")}
        </Button>
      </div>
    </section>
  );
}
