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

function TutoringIcon() {
  return (
    <svg className={styles.cardIcon} viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M14.4875 7.40777C14.0975 7.79777 13.4475 7.79777 13.0575 7.40777L8.5875 2.94777L1.5375 9.98777L0.8775 9.35777C-0.2925 8.18777 -0.2925 6.28777 0.8775 5.11777L5.1175 0.877766C6.2875 -0.292234 8.1875 -0.292234 9.3575 0.877766L14.4875 5.99777C14.8775 6.38777 14.8775 7.01777 14.4875 7.40777ZM15.1875 5.28777C15.9675 6.06777 15.9675 7.33777 15.1875 8.11777C13.9175 9.38777 12.5775 8.33777 12.3575 8.11777L8.5975 4.35777L3.0275 9.92777C2.6375 10.3178 2.6375 10.9478 3.0275 11.3378C3.4175 11.7278 4.0475 11.7278 4.4475 11.3378L9.0675 6.71777L9.7775 7.42777L5.1575 12.0478C4.7675 12.4378 4.7675 13.0678 5.1575 13.4578C5.5475 13.8478 6.1775 13.8478 6.5775 13.4578L11.1975 8.83777L11.9075 9.54777L7.2875 14.1678C6.8975 14.5578 6.8975 15.1878 7.2875 15.5778C7.6775 15.9678 8.3075 15.9678 8.6975 15.5778L13.3175 10.9578L14.0275 11.6678L9.4075 16.2878C9.0175 16.6778 9.0175 17.3078 9.4075 17.6978C9.7975 18.0878 10.4275 18.0878 10.8175 17.6978L19.1375 9.35777C20.3075 8.18777 20.3075 6.28777 19.1375 5.11777L14.8975 0.877766C13.7475 -0.272234 11.8875 -0.292235 10.7175 0.817765L15.1875 5.28777Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CeremonyIcon() {
  return (
    <svg className={styles.cardIcon} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M16 2H14V0H4V2H2C0.9 2 0 2.9 0 4V5C0 7.55 1.92 9.63 4.39 9.94C5.02 11.44 6.37 12.57 8 12.9V16H4V18H14V16H10V12.9C11.63 12.57 12.98 11.44 13.61 9.94C16.08 9.63 18 7.55 18 5V4C18 2.9 17.1 2 16 2ZM2 5V4H4V7.82C2.84 7.4 2 6.3 2 5ZM16 5C16 6.3 15.16 7.4 14 7.82V4H16V5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      className={styles.externalLinkIcon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
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
          <div className={styles.videoWrapper}>
            <iframe
              src={`https://player.vimeo.com/video/${t("videoCard2Id")}`}
              title={t("videoCard2Title")}
              loading="lazy"
              allow="fullscreen; picture-in-picture"
              allowFullScreen
              className={styles.videoIframe}
            />
          </div>
        </Card>

        <Card variant="default" className={styles.card}>
          <TempleIcon />
          <h3 className={styles.cardTitle}>{t("card2Title")}</h3>
          <p className={styles.cardBody}>{t("card2Body")}</p>
          <div className={styles.buttonSlot}>
            <span className={styles.buttonBadge}>{t("card2ButtonBadge")}</span>
            <Button
              as="a"
              href={t("card2ButtonUrl")}
              variant="secondary"
              className={styles.cardButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.cardButtonInner}>
                {t("card2ButtonLabel")}
                <ExternalLinkIcon />
              </span>
            </Button>
            <span className={styles.buttonDescription}>{t("card2ButtonDescription")}</span>
          </div>
        </Card>

        <Card variant="default" className={styles.card}>
          <MicroscopeIcon />
          <h3 className={styles.cardTitle}>{t("card3Title")}</h3>
          <p className={styles.cardBody}>{t("card3Body")}</p>
          <div className={styles.videoWrapper}>
            <iframe
              src={`https://player.vimeo.com/video/${t("videoCard3Id")}`}
              title={t("videoCard3Title")}
              loading="lazy"
              allow="fullscreen; picture-in-picture"
              allowFullScreen
              className={styles.videoIframe}
            />
          </div>
        </Card>

        <Card variant="default" className={styles.card}>
          <TutoringIcon />
          <h3 className={styles.cardTitle}>{t("card4Title")}</h3>
          <p className={styles.cardBody}>{t("card4Body")}</p>
        </Card>

        <Card variant="default" className={styles.card}>
          <CeremonyIcon />
          <h3 className={styles.cardTitle}>{t("card5Title")}</h3>
          <p className={styles.cardBody}>{t("card5Body")}</p>
        </Card>

        <Card variant="default" className={styles.card}>
          <LegacyIcon />
          <h3 className={styles.cardTitle}>{t("card6Title")}</h3>
          <p className={styles.cardBody}>{t("card6Body")}</p>
        </Card>
      </div>
    </section>
  );
}
