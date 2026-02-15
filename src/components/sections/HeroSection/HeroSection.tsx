import { Button } from "@/components/ui";
import styles from "./HeroSection.module.css";

const DOCUMENTS_ANCHOR = "#documentos-finales";

export function HeroSection() {
  return (
    <section className={styles.section} aria-label="Resultados Legalthon 2025">
      <div className={styles.wrapper}>
        <h1 className={styles.title}>RESULTADOS LEGALTHON 2025</h1>
        <p className={styles.subtitle}>
          Hackathon Académico sobre materias Jurídicas de la Blockchain.
        </p>
        <p className={styles.partners}>
          Facultad de Derecho (UBA) • Comunidad Cardano • FinGurú • Project Catalyst
        </p>
        <Button as="a" href={DOCUMENTS_ANCHOR} variant="primary" className={styles.cta}>
          VER DOCUMENTOS FINALES
        </Button>
      </div>
    </section>
  );
}
