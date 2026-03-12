"use client";

import ButtonComponent from "../buttons/Button";
import styles from "./ModalConfirm.module.css";

import { t } from "@/i18n";

type ModalProps = {
  onClose: () => void;
};

export default function ModalConfirm({ onClose }: ModalProps) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h3 className={styles.modalTitle}>{t("form.mailSended")}</h3>

        <p className={styles.modalSubtitle}>{t("form.mailSendedSubtitle")}</p>

        <ButtonComponent
          type="button"
          title="Continuar"
          colorPalette="BROWN"
          onAction={() => onClose()}
        />
      </div>
    </div>
  );
}
