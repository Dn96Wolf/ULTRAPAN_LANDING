import styles from "./Buttons.module.css";

export interface ButtonProps {
  title: string;
  onAction: () => void;
  type?: "button" | "submit" | "reset";
  colorPalette: "BROWN" | "BLUE";
}

export default function ButtonComponent({
  title,
  onAction,
  type = "button",
  colorPalette = "BROWN",
}: ButtonProps) {
  return (
    <>
      {colorPalette === "BROWN" && (
        <button type={type} className={`${styles.button}`} onClick={onAction}>
          <p className={styles.buttonText}>{title}</p>
        </button>
      )}

      {colorPalette === "BLUE" && (
        <button
          type={type}
          className={`${styles.button} ${styles.btnBlue}`}
          onClick={onAction}
        >
          <p className={styles.buttonText}>{title}</p>
        </button>
      )}
    </>
  );
}
