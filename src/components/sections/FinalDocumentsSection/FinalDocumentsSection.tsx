import { getLocale, getTranslations } from "next-intl/server";
import { Card, Button, DownloadIcon } from "@/components/ui";
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

function getDocUrl(
  viewUrl: string,
  viewUrlEn: string,
  downloadUrl: string,
  downloadUrlEn: string,
  locale: string
): { view: string; download: string } {
  const useEn = locale === "en" && viewUrlEn;
  return {
    view: useEn ? viewUrlEn : viewUrl,
    download: useEn ? downloadUrlEn : downloadUrl,
  };
}

export async function FinalDocumentsSection() {
  const t = await getTranslations("finalDocuments");
  const locale = await getLocale();

  const doc1 = getDocUrl(
    t("doc1ViewUrl"),
    t("doc1ViewUrlEn"),
    t("doc1DownloadUrl"),
    t("doc1DownloadUrlEn"),
    locale
  );
  const doc2 = getDocUrl(
    t("doc2ViewUrl"),
    t("doc2ViewUrlEn"),
    t("doc2DownloadUrl"),
    t("doc2DownloadUrlEn"),
    locale
  );
  const doc3 = getDocUrl(
    t("doc3ViewUrl"),
    t("doc3ViewUrlEn"),
    t("doc3DownloadUrl"),
    t("doc3DownloadUrlEn"),
    locale
  );

  const starPositions: { left: string; top: string; delay: string }[] = [
    { left: "10%", top: "6%", delay: "0s" }, // #1
    { left: "84%", top: "11%", delay: "0.4s" }, // #2
    { left: "22%", top: "18%", delay: "0.8s" }, // #3
    { left: "70%", top: "20%", delay: "0.2s" }, // #4
    { left: "15%", top: "32%", delay: "1.1s" }, // #5
    { left: "88%", top: "34%", delay: "0.6s" }, // #6
    { left: "90%", top: "60%", delay: "0.9s" }, // #7
    { left: "58%", top: "79%", delay: "0.3s" }, // #8
    { left: "8%", top: "82%", delay: "0.55s" }, // #9
    { left: "92%", top: "86%", delay: "0.55s" }, // #10
    { left: "20%", top: "96%", delay: "0.55s" }, // #11
  ];

  return (
    <section
      id="documentos-finales"
      className={styles.section}
      aria-labelledby="documents-title"
    >
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
                href={doc1.view}
                variant="secondary"
                className={styles.viewButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("viewOnline")}
              </Button>
              <a
                href={doc1.download}
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
                href={doc2.view}
                variant="secondary"
                className={styles.viewButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("viewOnline")}
              </Button>
              <a
                href={doc2.download}
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
                href={doc3.view}
                variant="secondary"
                className={styles.viewButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("viewOnline")}
              </Button>
              <a
                href={doc3.download}
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
      </div>
    </section>
  );
}
