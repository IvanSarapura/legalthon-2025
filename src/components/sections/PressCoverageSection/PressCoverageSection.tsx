import { getLocale, getTranslations } from "next-intl/server";
import { Card, Button, ExternalLinkIcon } from "@/components/ui";
import { PRESS_COVERAGE_ITEMS, getPressItemUrl } from "@/data/pressCoverage";
import styles from "./PressCoverageSection.module.css";

const ROW1_ITEMS = PRESS_COVERAGE_ITEMS.slice(0, 3);
const ROW2_ITEMS = PRESS_COVERAGE_ITEMS.slice(3, 5);

export async function PressCoverageSection() {
  const t = await getTranslations("pressCoverage");
  const locale = await getLocale();

  return (
    <section
      className={styles.section}
      aria-labelledby="press-coverage-title"
    >
      <h2 id="press-coverage-title" className={styles.title}>
        {t("title")}
      </h2>
      <div className={styles.row1}>
        {ROW1_ITEMS.map((item) => (
          <Card key={item.id} variant="default" className={styles.card}>
            <span className={styles.sourceBadge}>
              {item.source === "finguru" ? "FinGurú" : "LinkedIn"}
            </span>
            <h3 className={styles.cardTitle}>
              {t(`${item.id}Title` as "finguru1Title")}
            </h3>
            {item.source === "linkedin" && (
              <p className={styles.cardSubtitle}>
                {t(`${item.id}Subtitle` as "linkedin1Subtitle")}
              </p>
            )}
            <p className={styles.cardDescription}>
              {t(`${item.id}Description` as "finguru1Description")}
            </p>
            <Button
              as="a"
              href={getPressItemUrl(item.url, locale)}
              variant="secondary"
              className={styles.cardButton}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t("readMoreLabel")}: ${t(`${item.id}Title` as "finguru1Title")}`}
            >
              <span className={styles.cardButtonInner}>
                {t("readMoreLabel")}
                <ExternalLinkIcon className={styles.externalLinkIcon} />
              </span>
            </Button>
          </Card>
        ))}
      </div>
      <div className={styles.row2}>
        {ROW2_ITEMS.map((item) => (
          <Card key={item.id} variant="default" className={styles.card}>
            <span className={styles.sourceBadge}>
              {item.source === "finguru" ? "FinGurú" : "LinkedIn"}
            </span>
            <h3 className={styles.cardTitle}>
              {t(`${item.id}Title` as "finguru1Title")}
            </h3>
            {item.source === "linkedin" && (
              <p className={styles.cardSubtitle}>
                {t(`${item.id}Subtitle` as "linkedin1Subtitle")}
              </p>
            )}
            <p className={styles.cardDescription}>
              {t(`${item.id}Description` as "finguru1Description")}
            </p>
            <Button
              as="a"
              href={getPressItemUrl(item.url, locale)}
              variant="secondary"
              className={styles.cardButton}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t("readMoreLabel")}: ${t(`${item.id}Title` as "finguru1Title")}`}
            >
              <span className={styles.cardButtonInner}>
                {t("readMoreLabel")}
                <ExternalLinkIcon className={styles.externalLinkIcon} />
              </span>
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
