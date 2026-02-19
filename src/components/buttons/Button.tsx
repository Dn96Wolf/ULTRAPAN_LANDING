import styles from "./Buttons.module.css";

export interface ButtonProps {
  title: string;
  onAction?: () => void;
  type?: "button" | "submit" | "reset";
  colorPalette: "BROWN" | "BLUE";
  disabled?: boolean;
}

export default function ButtonComponent({
  title,
  onAction,
  type = "button",
  colorPalette = "BROWN",
  disabled = false,
}: ButtonProps) {
  return (
    <>
      {colorPalette === "BROWN" && (
        <button type={type} className={`${styles.button} ${styles.btnBrown}`} onClick={onAction}>
          <p className={styles.buttonText}>{title}</p>
        </button>
      )}

      {colorPalette === "BLUE" && (
        <button
          type={type}
          className={`${styles.button} ${styles.btnBlue}`}
          onClick={onAction}
          disabled={disabled}
        >
          <p className={styles.buttonText}>{title}</p>
        </button>
      )}
    </>
  );
}
