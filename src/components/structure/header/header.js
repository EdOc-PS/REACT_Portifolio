import { useEffect } from 'react';
import style from './header.module.sass'
import { Link } from 'react-router-dom';

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
        <li className={style.header_li}><Link to='#home'>Inicio <i class="fi fi-sr-earth-americas"></i></Link></li>
        <li className={style.header_li}><Link to='#about'>Sobre Mim <i class="fi fi-sr-user-crown"></i></Link></li>
        <li className={style.header_li}><Link to='#skills'>Carreira <i class="fi fi-sr-graduation-cap"></i></Link></li>
        <li className={style.header_li}><Link to='#projects'>Projetos <i class="fi fi-sr-briefcase-blank"></i></Link></li>
      </ul>

    </header>
  );
}


