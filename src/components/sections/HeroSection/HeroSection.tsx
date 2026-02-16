import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui";
import styles from "./HeroSection.module.css";

const DOCUMENTS_ANCHOR = "#documentos-finales";

export async function HeroSection() {
  const t = await getTranslations("hero");

  return (
    <section className={styles.section} aria-label={t("ariaLabel")}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          <span className={styles.titleLine1}>{t("titleLine1")}</span>
          <span className={styles.titleLine2}>{t("titleLine2")}</span>
        </h1>
        <p className={styles.subtitle}>{t("subtitle")}</p>
        <p className={styles.subtitle}>{t("partners")}</p>
        <Button as="a" href={DOCUMENTS_ANCHOR} variant="primary" className={styles.cta}>
          {t("ctaDocuments")}
        </Button>
      </div>
    </section>
  );
}
