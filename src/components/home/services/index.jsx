import styles from "./services.module.css";
import {
  LuGraduationCap,   // Hľadanie školy/školstva
  LuLanguages,       // Tlmočenie
  LuLandmark,        // Prvý kontakt s Košickými inštitúciami
  LuShield,          // Otázky o cudzineckej polícii
  LuFileText,        // Vyplnenie tlačív a tlač
  LuUsers            // Celkové integračné poradenstvo
} from "react-icons/lu";

export default function Services() {
  const items = [
    { icon: <LuGraduationCap />, label: "Hľadanie školy/školstva" },
    { icon: <LuLanguages />,     label: "Tlmočenie" },
    { icon: <LuLandmark />,      label: "Prvý kontakt s Košickými inštitúciami" },
    { icon: <LuShield />,        label: "Otázky o cudzineckej polícii" },
    { icon: <LuFileText />,      label: "Vyplnenie tlačív a tlač" },
    { icon: <LuUsers />,         label: "Celkové integračné poradenstvo" },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Naše služby</h2>

        <ul className={styles.grid} aria-label="Zoznam služieb">
          {items.map((it, i) => (
            <li key={i} className={styles.card}>
              {/* Якщо знадобиться лінк — обгорни .inner у <a href="..."> */}
              <div className={styles.border}>
                <div className={styles.inner}>
                  <span className={styles.icon} aria-hidden="true">{it.icon}</span>
                  <span className={styles.label}>{it.label}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

