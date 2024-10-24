import { Link } from 'react-router-dom';
import style from './details.module.sass'

export default function Details() {


  return (
    <>
      <header className={style.card_header}>
        <Link to={"/"} className={style.card_back}><i class="fi fi-sr-arrow-left"></i></Link>
      </header>


      <section className={style.card_section}>
        <div className={style.card_container}>

          <div className={style.card_article}>
            <h1>Name Project</h1>
            <div className={style.button_container}>
              <button>Web <i class="fi fi-sr-globe"></i></button>
              <button>Repositorie <i class="fi fi-sr-code-branch"></i></button>
            </div>
            <div className={style.card_language}>
              <label>Languages: </label>
              <ul>
                <li>JAVASCRIPT</li>
                <li>HTML</li>
              </ul>
            </div>
          </div>

          <div className={style.card_description}>
            <img
              src="https://img.ibxk.com.br/2024/09/16/16123335919125.jpg?ims=704x"
              alt="Project"
            />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus praesentium culpa laudantium tempore quos blanditiis modi. Laudantium id amet modi, consectetur corporis, aperiam sequi explicabo esse, pariatur animi quas ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellat quam eligendi odit beatae, facilis harum modi adipisci quis iure? Iusto cumque ex, dicta nesciunt suscipit in molestias amet quia.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}


