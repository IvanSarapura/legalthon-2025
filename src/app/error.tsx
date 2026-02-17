"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./error.module.css";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  const router = useRouter();

  useEffect(() => {
    // Log del error para debugging (solo en desarrollo)
    if (process.env.NODE_ENV === "development") {
      console.error("Error global capturado:", error);
    }
  }, [error]);

  const handleGoHome = () => {
    router.push("/es"); // Redirigir al locale por defecto
  };

  return (
    <html lang="es">
      <body>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Algo salió mal</h1>
            <p className={styles.description}>
              Lo sentimos, ocurrió un error inesperado. Por favor, intenta
              nuevamente o vuelve a la página principal.
            </p>
            {error.digest && (
              <p className={styles.digest}>
                ID de error: <code>{error.digest}</code>
              </p>
            )}
            <div className={styles.actions}>
              <button onClick={reset} className={styles.buttonPrimary}>
                Intentar de nuevo
              </button>
              <button onClick={handleGoHome} className={styles.buttonSecondary}>
                Ir al inicio
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
