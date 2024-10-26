import style from './skills.module.sass'

export default function Skills() {
  return (
    <section className={style.skills_section}>
      <div className={style.skills_container}>
        <div className={style.skills_text}>
          <h1>Minhas Habilidades</h1>
          <p className={style.skills_p}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum.
            Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
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

      <div className={style.edu_container}>

      </div>
    </section>
  );
}


