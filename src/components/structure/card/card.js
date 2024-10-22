import { Link } from 'react-router-dom';
import style from './card.module.sass'

export default function Card() {

  return (
    <Link to={"/details"} className={style.card_body}>
      <img src="https://img.ibxk.com.br/2024/09/16/16123335919125.jpg?ims=704x" alt="" />

      <div className={style.card_text}>
        <div className={style.card_title}>
          <h1>2024</h1>
          <i class="fi fi-sr-bullet"></i>
        </div>

        <div className={style.card_desc}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, optio? Dolorem, beatae
            ipsa
            asperiores numquam </p>
        </div>
      </div>
    </Link>
  );
}


