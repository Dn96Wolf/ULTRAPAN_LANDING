import styles from "./Services.module.css";
import Image from "next/image";
import { BENEFITS, SERVICES } from "@/utils/constants";
import { ChartNoAxesCombined, CircleCheckBig } from 'lucide-react';

import {
  Check,
  Clock
} from "lucide-react";

const services = SERVICES;

const benefits = BENEFITS;

const iconMap: Record<string, React.ComponentType<any>> = {
  clock: Clock,
  check: CircleCheckBig,
  analitics: ChartNoAxesCombined,
};

export default function Page() {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.content}>
          {services.length > 0 &&
            services.map((e, index) => (
              <div className={`${e.className}`} key={index}>
                <h2 className={styles.title}>{e.title}</h2>

                <div>
                  <p className={styles.text}>{e.descripton}</p>

                  {e.image && (
                    <>
                      <div className={styles.imageContainer}>
                        <Image
                          className={styles.image}
                          src={e.image}
                          width={140}
                          height={30}
                          alt=""
                        />
                      </div>
                    </>
                  )}
                </div>

                {e.list.length > 0 && (
                  <div className={styles.listContainer}>
                    {e.list.map((item) => (
                      <div className={styles.list} key={item}>
                        <Check className={styles.check} />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>

      <section className={styles.benefits}>
        <h2 className={styles.title}>Beneficios del uso de la línea ULTRAPAN</h2>

        <div>
          {benefits.length &&
            benefits.map((element, index) => {
              const Icon = iconMap[element.icon];
              return (
                <div key={index}>
                  {Icon && <Icon size={18} />}
                  <span>{element.title}</span>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
}
