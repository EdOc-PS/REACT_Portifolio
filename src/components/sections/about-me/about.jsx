
import { Link } from 'react-router-dom';
import style from './about.module.sass'

export default function About() {

  return (
    <section className={style.about_section} id={"about"}>
      <div className={style.about_container}>

        <div className={style.about_text}>
          <h1>Sou Eduardo, Desenvolvedor</h1>
          <p className={style.about_p}>
            Olá, sou o Eduardo, programador com experiência prática em desenvolvimento web, análise de dados e infraestrutura de TI. Atuei em projetos utilizando tecnologias como React, Angular, Java, Boomi e bancos de dados relacionais. Tenho vivência em ambientes corporativos através de estágio e participação em empresa júnior.
            Busco oportunidades para aplicar meus conhecimentos e contribuir com soluções inovadoras no setor de tecnologia.
          </p>
          <button>Download CV <i class="fi fi-sr-arrow-small-down"></i></button>
          <div className={style.about_follow}>
            <p>Sigua-me</p>
            <span></span>
            <ul>
              <li><Link to={"https://www.instagram.com/edoc.ps/"} target='blank'><i class="fa-brands fa-instagram"></i></Link></li>
              <li><Link to={"https://github.com/edOc-PS"} target='blank'><i class="fa-brands fa-github"></i></Link></li>
              <li><Link to={"https://www.linkedin.com/in/eduardo-oct%C3%A1vio-284066259/"} target='blank'><i class="fa-brands fa-linkedin-in"></i></Link></li>
            </ul>
          </div>

        </div>
        <div><img src='#' alt='' /></div>
      </div>
    </section>
  );
}


