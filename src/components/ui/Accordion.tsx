'use client';

import { useId, useState } from 'react';
import styles from './Accordion.module.css';

export type AccordionItem = {
  title: string;
  content: React.ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  allowMultipleOpen?: boolean; // default false (solo uno abierto)
  defaultOpenIndex?: number; // default -1 (ninguno)
};

export default function Accordion({
  items,
  allowMultipleOpen = false,
  defaultOpenIndex = -1
}: AccordionProps) {
  const baseId = useId();

  const [openIndexes, setOpenIndexes] = useState<number[]>(
    defaultOpenIndex >= 0 ? [defaultOpenIndex] : []
  );

  const isOpen = (index: number) => openIndexes.includes(index);

  const toggle = (index: number) => {
    setOpenIndexes((prev) => {
      const currentlyOpen = prev.includes(index);

      if (allowMultipleOpen) {
        return currentlyOpen ? prev.filter((i) => i !== index) : [...prev, index];
      }

      // Solo uno abierto
      return currentlyOpen ? [] : [index];
    });
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => {
        const open = isOpen(index);
        const buttonId = `${baseId}-btn-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={index} className={styles.item}>
            <h3 className={styles.heading}>
              <button
                id={buttonId}
                type="button"
                className={styles.trigger}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => toggle(index)}
              >
                <span className={styles.title}>{item.title}</span>
                <span className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`} aria-hidden="true">
                  ▾
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`${styles.panel} ${open ? styles.panelOpen : ''}`}
            >
              <div className={styles.content}>{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
