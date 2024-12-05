
import { Link } from 'react-router-dom';
import style from './about.module.sass'

export default function About() {

  return (
    <section className={style.about_section} id={"about"}>
      <div className={style.about_container}>

        <div className={style.about_text}>
          <h1>Sou Eduardo, Desenvolvedor</h1>
          <p className={style.about_p}>
            Hello there. Tenho me dedicado à programação desde os meus 15 anos, quando comecei a explorar a 
            área através do curso técnico em informática e, mais tarde, no bacharelado em Sistemas de Informação. 
            Minha paixão por aprender e aprofundar meu conhecimento nesse campo continua crescendo a cada dia.
          </p>
          <button>Download CV <i class="fi fi-sr-arrow-small-down"></i></button>
          <div className={style.about_follow}>
            <p>Sigua-me</p>
            <span></span>
            <ul>
              <li><Link to={"https://www.instagram.com/eduuard_oc/"} target='blank'><i class="fa-brands fa-instagram"></i></Link></li>
              <li><Link to={"https://github.com/edOc-PS"} target='blank'><i class="fa-brands fa-github"></i></Link></li>
              <li><Link to={"https://www.linkedin.com/in/eduardo-oct%C3%A1vio-284066259/"} target='blank'><i class="fa-brands fa-linkedin-in"></i></Link></li>
            </ul>
          </div>

        </div>
        <div><img src='#' alt=''/></div>
      </div>
    </section>
  );
}


