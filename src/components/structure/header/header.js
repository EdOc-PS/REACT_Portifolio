import { useEffect } from 'react';
import style from './header.module.sass'

export default function Header() {

  useEffect(() => {
    const scrollHeader = () => {
      const header = document.querySelector('header')
      header.classList.toggle(style.scroll_header, window.scrollY > 50);
    }

    window.addEventListener("scroll", scrollHeader);

  })


  return (
    <header className={style.header}>
      <ul className={style.header_ul}>
        <li className={style.header_li}><a href='#'>Inicio <i class="fi fi-sr-earth-americas"></i></a></li>
        <li className={style.header_li}><a href='#'>Sobre Mim <i class="fi fi-sr-user-crown"></i></a></li>
        <li className={style.header_li}><a href='#'>Carreira <i class="fi fi-sr-graduation-cap"></i></a></li>
        <li className={style.header_li}><a href='#'>Projetos <i class="fi fi-sr-briefcase-blank"></i></a></li>
      </ul>

    </header>
  );
}


