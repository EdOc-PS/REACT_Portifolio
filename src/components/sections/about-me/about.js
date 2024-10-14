
import style from './about.module.sass'

export default function About() {

  return (
    <section className={style.about_section}>
      <div className={style.about_container}>

        <div className={style.about_text}>
          <h1>Sou Eduardo, Programador</h1>
          <p>
            Hello there. Tenho me dedicado à programação desde os meus 15 anos, quando comecei a explorar a 
            área através do curso técnico em informática e, mais tarde, no bacharelado em Sistemas de Informação. 
            Minha paixão por aprender e aprofundar meu conhecimento nesse campo continua crescendo a cada dia.
          </p>
          <button>Download CV <i class="fi fi-sr-arrow-small-down"></i></button>
          <div className={style.about_follow}>
            <p>Sigua-me</p>
            <ul>
              <li><i class="fi fi-brands-instagram"></i></li>
              <li><i class="fi fi-brands-github"></i></li>
              <li><i class="fi fi-brands-linkedin"></i></li>
            </ul>
          </div>

        </div>
        <div><img src='#' alt=''/></div>
      </div>
    </section>
  );
}


