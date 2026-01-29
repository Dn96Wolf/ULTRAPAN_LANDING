import styles from "./Buttons.module.css";

export interface ButtonProps {
  title: string;
  onAction: () => void;
  type?: "button" | "submit" | "reset";
}

export default function ButtonComponent({
  title,
  onAction,
  type = "button",
}: ButtonProps) {
  return (
    <button type={type} className={styles.button} onClick={onAction}>
      <p className={styles.buttonText}>{title}</p>
    </button>
  );
}
