import styles from "./testes.module.sass";
import { motion } from "framer-motion";

export default function Testes() {
  return (
    <section className={styles.section}>
      <div className={styles["blob-container"]}>
        <motion.div
          className={styles.blob}
          animate={{
            borderRadius: [
              "60% 40% 30% 70% / 60% 30% 70% 40%",
              "40% 60% 70% 30% / 50% 60% 30% 60%",
              "70% 30% 50% 50% / 60% 40% 60% 40%",
              "60% 40% 30% 70% / 60% 30% 70% 40%",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
}
