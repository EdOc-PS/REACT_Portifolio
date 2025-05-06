import Carrer from '../../structure/grid-carrer/carrer';
import style from './skills.module.sass'

export default function Skills() {
  return (
    <section className={style.skills_section} id={"skills"}>

      <div className={style.skills_container}>
        <div className={style.ability_container}>
          <div className={style.skills_text}>
            <h1>Minhas Habilidades</h1>
            <p className={style.skills_p}>
            Tenho experiência sólida e foco em tecnologias como Angular, React, TypeScript, JavaScript, Java, HTML e SASS, que utilizo para criar aplicações modernas, dinâmicas e eficientes, sempre buscando melhorar a experiência do usuário e otimizar o desempenho das soluções desenvolvidas.
            </p>
          </div>

          <div className={style.skills}>
            <div className={style.skills_area}>
              <div className={`${style.skills_item} ${style.grid_a}`}></div>
              <div className={`${style.skills_item} ${style.grid_b}`}></div>
              <div className={`${style.skills_item} ${style.grid_c}`}></div>
              <div className={`${style.skills_item} ${style.grid_d}`}></div>
              <div className={`${style.skills_item} ${style.grid_a}`}></div>
              <div className={`${style.skills_item} ${style.grid_b}`}></div>
            </div>
          </div>
        </div>

        <div className={style.carrer_container}>
          <div className={style.skills_text}>
            <h1>Educação</h1>
            <p className={style.skills_p}>
              Ao longo da minha trajetória, busquei constantemente aprimorar meus conhecimentos e habilidades, com ênfase em áreas essenciais para o desenvolvimento profissional na área de tecnologia.
            </p>
          </div>
          <Carrer />
        </div>
      </div>


    </section>
  );
}


