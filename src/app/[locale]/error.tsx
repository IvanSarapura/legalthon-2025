"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui";
import buttonStyles from "@/components/ui/Button/Button.module.css";
import styles from "./error.module.css";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  const t = useTranslations("error");

  useEffect(() => {
    // Log del error para debugging (solo en desarrollo)
    if (process.env.NODE_ENV === "development") {
      console.error("Error capturado:", error);
    }
  }, [error]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{t("title")}</h1>
        <p className={styles.description}>{t("description")}</p>
        {error.digest && (
          <p className={styles.digest}>
            {t("errorId")}: <code>{error.digest}</code>
          </p>
        )}
        <div className={styles.actions}>
          <Button onClick={reset} variant="primary">
            {t("tryAgain")}
          </Button>
          <Link href="/" className={`${buttonStyles.button} ${buttonStyles.secondary}`}>
            {t("goHome")}
          </Link>
        </div>
      </div>
    </div>
  );
}
