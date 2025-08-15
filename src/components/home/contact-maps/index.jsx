import styles from "./contact.module.css";

/** Універсальний блок "контакти + карта" */
function ContactBlock({
  title,
  addressLines = [],
  phone,
  email,
  hours = [],
  lunchNote,
  mapQuery,          // адреса для карти (query)
  reverseOnDesktop,  // для другого офісу міняємо порядок (карта зліва)
}) {
  return (
    <section
      className={`${styles.block} ${reverseOnDesktop ? styles.blockReverse : ""}`}
      aria-labelledby={`${title.replace(/\s+/g, "-").toLowerCase()}-title`}
    >
      {/* Текстова колонка */}
      <div className={styles.textCol}>
        <h2 id={`${title.replace(/\s+/g, "-").toLowerCase()}-title`} className={styles.h2}>
          {title}
        </h2>

        <address className={styles.address}>
          {addressLines.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </address>

        {phone && (
          <p className={styles.kv}>
            <span className={styles.k}>Phone:</span>{" "}
            <a className={styles.link} href={`tel:${phone.replace(/\s+/g, "")}`}>{phone}</a>
          </p>
        )}

        {email && (
          <p className={styles.kv}>
            <span className={styles.k}>Email:</span>{" "}
            <a className={styles.link} href={`mailto:${email}`}>{email}</a>
          </p>
        )}

        {!!hours.length && (
          <>
            <h3 className={styles.h3}>Otváracie hodiny:</h3>
            <ul className={styles.hours}>
              {hours.map((row, i) => (
                <li key={i}>
                  <span className={styles.day}>{row.day}</span>
                  <span className={styles.time}>{row.time}</span>
                </li>
              ))}
            </ul>
          </>
        )}

        {lunchNote && (
          <p className={styles.lunch}>
            <strong>Obedňajšia prestávka:</strong> {lunchNote}
          </p>
        )}
      </div>

      {/* Карта */}
      <div className={styles.mapCol} role="region" aria-label="Mapa">
        <div className={styles.mapFrame}>
          <iframe
            title={`Mapa - ${title}`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

export default function ContactMaps() {
  // Повні назви днів словацькою
  const hoursCommon = [
    { day: "Pondelok", time: "8:00 – 15:00 h." },
    { day: "Utorok",   time: "8:00 – 15:00 h." },
    { day: "Streda",   time: "8:00 – 16:00 h." },
    { day: "Štvrtok",  time: "8:00 – 15:00 h." },
    { day: "Piatok",   time: "8:00 – 14:00 h." },
  ];

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        {/* Офіс 1 — текст зліва, карта справа */}
        <ContactBlock
          title="Kontaktujte nás"
          addressLines={[
            "Hlavná 68, Košice, B 214, 2. posch.",
            "040 01, Staré Mesto",
          ]}
          phone="+421 908 365 995"
          email="centrumH68@kosice.sk"
          hours={hoursCommon}
          lunchNote="12:00 – 12:30 h."
          mapQuery="Hlavná 68, Košice"
          reverseOnDesktop={false}
        />

        {/* Офіс 2 — карта зліва, текст справа */}
        <ContactBlock
          title="Kontaktujte nás"
          addressLines={[
            "Tr. SNP 48/A, Košice",
            "040 10, Staré Mesto",
          ]}
          phone="+421 55 64 19 190"
          hours={hoursCommon}
          lunchNote="12:00 – 12:30 h."
          mapQuery="Trieda SNP 48A, Košice"
          reverseOnDesktop={true}
        />
      </div>
    </div>
  );
}



