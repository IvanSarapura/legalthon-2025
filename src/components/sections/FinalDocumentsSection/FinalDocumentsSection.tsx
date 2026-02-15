import { Card } from "@/components/ui";
import styles from "./FinalDocumentsSection.module.css";

export function FinalDocumentsSection() {
  return (
    <section
      id="documentos-finales"
      className={styles.section}
      aria-labelledby="documents-title"
    >
      <h2 id="documents-title" className={styles.title}>
        Documentos Finales
      </h2>
      <p className={styles.subtitle}>
        Accede a los trabajos de investigación resultantes del Hackathon.
      </p>
      <div className={styles.podium}>
        <Card variant="podium" className={styles.cardSecond}>
          <span className={styles.placeholder}>2º puesto</span>
        </Card>
        <Card variant="podium" className={styles.cardFirst}>
          <span className={styles.placeholder}>1er puesto</span>
        </Card>
        <Card variant="podium" className={styles.cardThird}>
          <span className={styles.placeholder}>3er puesto</span>
        </Card>
      </div>
      <p className={styles.note}>
        Nota: Los documentos son Open Source con licencia Apache 2.0 bajo consentimiento
        expreso y firmado de los autores y organizadores.
      </p>
    </section>
  );
}
