import { useEffect } from 'react';
import style from './header.module.sass'

export default function Header() {

  useEffect(() => {
    const scrollHeader = () => {
      const header = document.querySelector('header')
      header.classList.toggle(style.scroll_header, window.scrollY > 100);
      console.log(header);
    }

    window.addEventListener("scroll", scrollHeader);

  })


  return (
    <header className={style.header}>
      <ul>
        <li><a href='#'>Inicio <i class="fi fi-sr-earth-americas"></i></a></li>
        <li><a href='#'>Sobre Mim <i class="fi fi-sr-user-crown"></i></a></li>
        <li><a href='#'>Carreira <i class="fi fi-sr-graduation-cap"></i></a></li>
        <li><a href='#'>Projetos <i class="fi fi-sr-briefcase-blank"></i></a></li>
      </ul>

    </header>
  );
}


