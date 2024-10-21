import { useEffect } from 'react';
import style from './home.module.sass'

export default function Home() {
  return (
    <section className={style.home_section}>

      <div className={style.home_container}>
        <div className={style.home_title}>
          <h1>Hello World!</h1>
        </div>

      </div>

      <div className={style.svg_background}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          className={style.shape_fill}></path>
        </svg>
      </div>
    </section>
  );
}


