import { getTranslations } from "next-intl/server";
import { Card, Button } from "@/components/ui";
import styles from "./InnovationPathSection.module.css";

function PurposeIcon() {
  return (
    <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM6.5 17.5L14.01 14.01L17.5 6.5L9.99 9.99L6.5 17.5ZM12 10.9C12.61 10.9 13.1 11.39 13.1 12C13.1 12.61 12.61 13.1 12 13.1C11.39 13.1 10.9 12.61 10.9 12C10.9 11.39 11.39 10.9 12 10.9Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TempleIcon() {
  return (
    <svg className={styles.cardIcon} viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M2 10.2425V14.2425C2 15.0725 2.67 15.7425 3.5 15.7425C4.33 15.7425 5 15.0725 5 14.2425V10.2425C5 9.4125 4.33 8.7425 3.5 8.7425C2.67 8.7425 2 9.4125 2 10.2425ZM8 10.2425V14.2425C8 15.0725 8.67 15.7425 9.5 15.7425C10.33 15.7425 11 15.0725 11 14.2425V10.2425C11 9.4125 10.33 8.7425 9.5 8.7425C8.67 8.7425 8 9.4125 8 10.2425ZM1.5 20.7425H17.5C18.33 20.7425 19 20.0725 19 19.2425C19 18.4125 18.33 17.7425 17.5 17.7425H1.5C0.67 17.7425 0 18.4125 0 19.2425C0 20.0725 0.67 20.7425 1.5 20.7425ZM14 10.2425V14.2425C14 15.0725 14.67 15.7425 15.5 15.7425C16.33 15.7425 17 15.0725 17 14.2425V10.2425C17 9.4125 16.33 8.7425 15.5 8.7425C14.67 8.7425 14 9.4125 14 10.2425ZM8.57 0.2325L0.67 4.3925C0.26 4.6025 0 5.0325 0 5.4925C0 6.1825 0.56 6.7425 1.25 6.7425H17.76C18.44 6.7425 19 6.1825 19 5.4925C19 5.0325 18.74 4.6025 18.33 4.3925L10.43 0.2325C9.85 -0.0775 9.15 -0.0775 8.57 0.2325Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MicroscopeIcon() {
  return (
    <svg className={styles.cardIcon} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z"
        fill="currentColor"
      />
      <path
        d="M8.35 10.01C5.62 9.91 0 11.27 0 14V16H9.54C7.07 13.24 8.31 10.11 8.35 10.01Z"
        fill="currentColor"
      />
      <path
        d="M17.43 14.02C17.79 13.43 18 12.74 18 12C18 9.79 16.21 8 14 8C11.79 8 10 9.79 10 12C10 14.21 11.79 16 14 16C14.74 16 15.43 15.78 16.02 15.43L18.59 18L20 16.59L17.43 14.02ZM14 14C12.9 14 12 13.1 12 12C12 10.9 12.9 10 14 10C15.1 10 16 10.9 16 12C16 13.1 15.1 14 14 14Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LegacyIcon() {
  return (
    <svg className={styles.cardIcon} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM9 17.93C5.05 17.44 2 14.08 2 10C2 9.38 2.08 8.79 2.21 8.21L7 13V14C7 15.1 7.9 16 9 16V17.93ZM15.9 15.39C15.64 14.58 14.9 14 14 14H13V11C13 10.45 12.55 10 12 10H6V8H8C8.55 8 9 7.55 9 7V5H11C12.1 5 13 4.1 13 3V2.59C15.93 3.78 18 6.65 18 10C18 12.08 17.2 13.97 15.9 15.39Z"
        fill="currentColor"
      />
    </svg>
  );
}

export async function InnovationPathSection() {
  const t = await getTranslations("innovationPath");

  return (
    <section className={styles.section} aria-labelledby="innovation-title">
      <h2 id="innovation-title" className={styles.title}>
        {t("title")}
      </h2>
      <div className={styles.grid}>
        <Card variant="default" className={styles.card}>
          <PurposeIcon />
          <h3 className={styles.cardTitle}>{t("card1Title")}</h3>
          <p className={styles.cardBody}>{t("card1Body")}</p>
        </Card>

        <Card variant="default" className={styles.card}>
          <TempleIcon />
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
          <MicroscopeIcon />
          <h3 className={styles.cardTitle}>{t("card3Title")}</h3>
          <p className={styles.cardBody}>{t("card3Body")}</p>
          <div className={styles.videoPlaceholder} aria-hidden="true">
            <span className={styles.videoPlaceholderText}>{t("videoPlaceholder")}</span>
          </div>
        </Card>

        <Card variant="default" className={`${styles.card} ${styles.cardFourth}`}>
          <LegacyIcon />
          <h3 className={styles.cardTitle}>{t("card4Title")}</h3>
          <p className={styles.cardBody}>{t("card4Body")}</p>
        </Card>
      </div>
    </section>
  );
}
