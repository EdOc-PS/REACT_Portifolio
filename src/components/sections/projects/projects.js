import Card from '../../structure/card/card';
import style from './projects.module.sass'

export default function Projects() {

  return (
    <section className={style.projects_section}>
      <div className={style.projects_text}>
        <h1>Projetos</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id assumenda porro pariatur praesentium.</p>
      </div>

      <div className={style.projects_container}>
        <Card />
        <Card />
      </div>
    </section>
  );
}


