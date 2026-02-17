import { getTranslations } from "next-intl/server";
import { ScrollToTopButton } from "./ScrollToTopButton";
import styles from "./Footer.module.css";

export async function Footer() {
  const t = await getTranslations("organizers");

  return (
    <>
      <footer className={styles.footer} role="contentinfo">
        <small className={styles.copyright}>{t("copyright")}</small>
      </footer>
      <ScrollToTopButton />
    </>
  );
}
