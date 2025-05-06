import { Link } from 'react-router-dom';
import style from './card.module.sass'

export default function Card({title, description}) {

  return (
    <Link to={`/project/${title}`} className={style.card_body}>
      <img src="https://img.ibxk.com.br/2024/09/16/16123335919125.jpg?ims=704x" alt="" />

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


