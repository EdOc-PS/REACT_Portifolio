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
        <li className={style.header_li}><Link to='#home'>Inicio <i className="fi fi-sr-earth-americas"></i></Link></li>
        <li className={style.header_li}><Link to='#about'>Sobre Mim <i className="fi fi-sr-user-crown"></i></Link></li>
        <li className={style.header_li}><Link to='#skills'>Carreira <i className="fi fi-sr-graduation-cap"></i></Link></li>
        <li className={style.header_li}><Link to='#projects'>Projetos <i className="fi fi-sr-briefcase-blank"></i></Link></li>
      </ul>

    </header>
  );
}