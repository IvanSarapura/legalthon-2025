import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { JURY_MEMBERS } from "@/data/jury";
import styles from "./JurySection.module.css";

export async function JurySection() {
  const t = await getTranslations("jury");

  return (
    <section className={styles.section} aria-labelledby="jury-title">
      <h2 id="jury-title" className={styles.title}>
        {t("title")}
      </h2>
      <div className={styles.grid} role="list">
        {JURY_MEMBERS.map((member) => {
          const nameKey = `${member.id}Name` as const;
          const roleKey = `${member.id}Role` as const;
          return (
            <article
              key={member.id}
              className={styles.card}
              role="listitem"
            >
              <div className={styles.photoCircle}>
                <Image
                  src={member.imageSrc}
                  alt=""
                  width={140}
                  height={140}
                  sizes="(max-width: 480px) 120px, (max-width: 768px) 100px, 140px"
                  className={member.flipHorizontal === true ? styles.photoFlipped : undefined}
                />
              </div>
              <h3 className={styles.cardName}>{t(nameKey)}</h3>
              <p className={styles.cardRole}>{t(roleKey)}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
