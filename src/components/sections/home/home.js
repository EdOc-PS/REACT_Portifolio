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
    </section>
  );
}


