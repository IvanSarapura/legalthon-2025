import { Card } from "@/components/ui";
import styles from "./InnovationPathSection.module.css";

export function InnovationPathSection() {
  return (
    <section className={styles.section} aria-labelledby="innovation-title">
      <h2 id="innovation-title" className={styles.title}>
        El Camino de la Innovación
      </h2>
      <div className={styles.grid}>
        <Card variant="default" className={styles.card}>
          <span className={styles.placeholder}>Card 1</span>
        </Card>
        <Card variant="default" className={styles.card}>
          <span className={styles.placeholder}>Card 2</span>
        </Card>
        <Card variant="default" className={styles.card}>
          <span className={styles.placeholder}>Card 3</span>
        </Card>
        <Card variant="default" className={styles.card}>
          <span className={styles.placeholder}>Card 4</span>
        </Card>
      </div>
    </section>
  );
}
