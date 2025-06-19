import { Experience } from "../../types/types";
import styles from "./ExperienceCard.module.css";
import akersgataImage from "../../assets/akersgata.jpg";
import { CxIcon } from "@computas/designsystem/icon/react";
import { ExperienceChip } from "./ExperienceChip";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  function getMonth(date: string) {
    const dateObj = new Date(date);
    const month = dateObj.toLocaleDateString("nb-NO", { month: "long" });
    const year = dateObj.getFullYear();
    return `${month.charAt(0).toUpperCase() + month.slice(1)} ${year}`;
  }

  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={experience.imageUrl || akersgataImage}
        alt={experience.title}
      />
      <div className={styles.chip}>
        <ExperienceChip type={experience.type} />
      </div>
      <div className={styles.info}>
        <p className={styles.keyInfo}>
          <CxIcon name="calendar" size="4" />{" "}
          {experience.startDate && getMonth(experience.startDate)} -{" "}
          {experience.endDate ? getMonth(experience.endDate) : "d.d"}
        </p>
        <p className={styles.keyInfo}>
          <CxIcon name="location" size="4" />{" "}
          {experience.company || "Selvstendig arbeid"}
        </p>
        <p className={styles.eventTitle}>{experience.title}</p>
      </div>
    </div>
  );
}
