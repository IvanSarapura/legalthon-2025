import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "target" | "rel"> {
  variant?: "primary" | "secondary";
  as?: "button" | "a";
  href?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  as = "button",
  href,
  target,
  rel,
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const classNames = [styles.button, styles[variant], className].filter(Boolean).join(" ");

  if (as === "a" && href) {
    return (
      <a
        className={classNames}
        href={href}
        target={target}
        rel={rel}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classNames} {...rest}>
      {children}
    </button>
  );
}
