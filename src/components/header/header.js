import { useEffect } from 'react';
import style from './header.module.sass'

export default function Header() {

useEffect(() => {
  const scrollHeader = () => {
    const header = document.querySelector('header')
    header.classList.toggle(style.scroll_header, window.scrollY > 0);
    console.log(header);
    
  }
  
  window.addEventListener("scroll", scrollHeader);
     

})


  return (
    <header className={style.header}>
        <ul>
            <li><a href='#'>Inicio</a></li>
            <li>Sobre Mim</li>
            <li>Carreira</li>
            <li>Projetos <i class="fi fi-sr-briefcase-blank"></i></li>
        </ul>
    </header>
  );
}


