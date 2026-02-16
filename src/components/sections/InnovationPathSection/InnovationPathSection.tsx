import { getTranslations } from "next-intl/server";
import { Card, Button } from "@/components/ui";
import styles from "./InnovationPathSection.module.css";

export async function InnovationPathSection() {
  const t = await getTranslations("innovationPath");

  return (
    <section className={styles.section} aria-labelledby="innovation-title">
      <h2 id="innovation-title" className={styles.title}>
        {t("title")}
      </h2>
      <div className={styles.grid}>
        <Card variant="default" className={styles.card}>
          <h3 className={styles.cardTitle}>{t("card1Title")}</h3>
          <p className={styles.cardBody}>{t("card1Body")}</p>
        </Card>

        <Card variant="default" className={styles.card}>
          <h3 className={styles.cardTitle}>{t("card2Title")}</h3>
          <p className={styles.cardBody}>{t("card2Body")}</p>
          <Button
            as="a"
            href={t("card2ButtonUrl")}
            variant="secondary"
            className={styles.cardButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("card2ButtonLabel")}
          </Button>
          <div className={styles.videoPlaceholder} aria-hidden="true">
            <span className={styles.videoPlaceholderText}>{t("videoPlaceholder")}</span>
          </div>
        </Card>

        <Card variant="default" className={styles.card}>
          <h3 className={styles.cardTitle}>{t("card3Title")}</h3>
          <p className={styles.cardBody}>{t("card3Body")}</p>
          <div className={styles.videoPlaceholder} aria-hidden="true">
            <span className={styles.videoPlaceholderText}>{t("videoPlaceholder")}</span>
          </div>
        </Card>

        <Card variant="default" className={`${styles.card} ${styles.cardFourth}`}>
          <h3 className={styles.cardTitle}>{t("card4Title")}</h3>
          <p className={styles.cardBody}>{t("card4Body")}</p>
        </Card>
      </div>
    </section>
  );
}
