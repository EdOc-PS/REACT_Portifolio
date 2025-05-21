import { Link } from 'react-router-dom';
import style from './card.module.sass'

export default function Card({title, description, id}) {

  return (
    <Link to={`/project/${title}`} className={style.card_body}>
      <img src={`./assets/projects-background/${id}.png`} alt="" />
      <div className={style.card_text}>
        <div className={style.card_title}>
          <h1>{title}</h1>
          <i class="fi fi-sr-bullet"></i>
        </div>

        <div className={style.card_desc}>
          <p> {description} </p>
        </div>
      </div>
    </Link>
  );
}


