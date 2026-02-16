import { getTranslations } from "next-intl/server";
import { Card } from "@/components/ui";
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
          <span className={styles.placeholder}>{t("card1")}</span>
        </Card>
        <Card variant="default" className={styles.card}>
          <span className={styles.placeholder}>{t("card2")}</span>
        </Card>
        <Card variant="default" className={styles.card}>
          <span className={styles.placeholder}>{t("card3")}</span>
        </Card>
        <Card variant="default" className={styles.card}>
          <span className={styles.placeholder}>{t("card4")}</span>
        </Card>
      </div>
    </section>
  );
}
