import style from "./home.module.sass";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className={style.home_section} id={"home"}>
      <div className={style.blob_container}>
        <motion.div
          className={style.blob}
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
      <div className={style.home_container}>
        <div className={style.home_title}>
          <h1>Hello World!</h1>
        </div>

        <div className={style.home_button}>
          <a href="#about">
            <i class="fi fi-sr-arrow-down"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
