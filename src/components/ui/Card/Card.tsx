import type { HTMLAttributes } from "react";
import styles from "./Card.module.css";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "podium" | "small";
  children: React.ReactNode;
}

export function Card({ variant = "default", children, className = "", ...rest }: CardProps) {
  const classNames = [styles.card, styles[variant], className].filter(Boolean).join(" ");
  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
}
