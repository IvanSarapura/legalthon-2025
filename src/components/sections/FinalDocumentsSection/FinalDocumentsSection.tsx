import { getTranslations } from "next-intl/server";
import { Card } from "@/components/ui";
import styles from "./FinalDocumentsSection.module.css";

export async function FinalDocumentsSection() {
  const t = await getTranslations("finalDocuments");

  return (
    <section
      id="documentos-finales"
      className={styles.section}
      aria-labelledby="documents-title"
    >
      <h2 id="documents-title" className={styles.title}>
        {t("title")}
      </h2>
      <p className={styles.subtitle}>{t("subtitle")}</p>
      <div className={styles.podium}>
        <Card variant="podium" className={styles.cardSecond}>
          <span className={styles.placeholder}>{t("place2")}</span>
        </Card>
        <Card variant="podium" className={styles.cardFirst}>
          <span className={styles.placeholder}>{t("place1")}</span>
        </Card>
        <Card variant="podium" className={styles.cardThird}>
          <span className={styles.placeholder}>{t("place3")}</span>
        </Card>
      </div>
      <p className={styles.note}>{t("note")}</p>
    </section>
  );
}
