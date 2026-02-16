import { getTranslations } from "next-intl/server";
import { Card, Button } from "@/components/ui";
import styles from "./FinalDocumentsSection.module.css";

function DocumentIcon() {
  return (
    <svg
      className={styles.docIcon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

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
          <span className={`${styles.prizeBadge} ${styles.prizeBadgeSecond}`} aria-hidden>
            {t("prizeBadge2")}
          </span>
          <DocumentIcon />
          <h3 className={styles.docTitle}>{t("doc1Title")}</h3>
          <div className={styles.actions}>
            <Button
              as="a"
              href={t("doc1ViewUrl")}
              variant="secondary"
              className={styles.viewButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("viewOnline")}
            </Button>
            <a
              href={t("doc1DownloadUrl")}
              className={styles.downloadButton}
              aria-label={t("downloadLabel")}
              download
            >
              <DownloadIcon />
            </a>
          </div>
        </Card>
        <Card variant="podium" className={styles.cardFirst}>
          <span className={`${styles.prizeBadge} ${styles.prizeBadgeFirst}`} aria-hidden>
            {t("prizeBadge1")}
          </span>
          <DocumentIcon />
          <h3 className={styles.docTitle}>{t("doc2Title")}</h3>
          <div className={styles.actions}>
            <Button
              as="a"
              href={t("doc2ViewUrl")}
              variant="secondary"
              className={styles.viewButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("viewOnline")}
            </Button>
            <a
              href={t("doc2DownloadUrl")}
              className={styles.downloadButton}
              aria-label={t("downloadLabel")}
              download
            >
              <DownloadIcon />
            </a>
          </div>
        </Card>
        <Card variant="podium" className={styles.cardThird}>
          <span className={`${styles.prizeBadge} ${styles.prizeBadgeThird}`} aria-hidden>
            {t("prizeBadge3")}
          </span>
          <DocumentIcon />
          <h3 className={styles.docTitle}>{t("doc3Title")}</h3>
          <div className={styles.actions}>
            <Button
              as="a"
              href={t("doc3ViewUrl")}
              variant="secondary"
              className={styles.viewButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("viewOnline")}
            </Button>
            <a
              href={t("doc3DownloadUrl")}
              className={styles.downloadButton}
              aria-label={t("downloadLabel")}
              download
            >
              <DownloadIcon />
            </a>
          </div>
        </Card>
      </div>
      <p className={styles.note}>{t("note")}</p>
    </section>
  );
}
