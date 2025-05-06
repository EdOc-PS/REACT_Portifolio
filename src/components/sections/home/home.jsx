import style from './home.module.sass'


export default function Home() {
  return (
    <section className={style.home_section} id={"home"}>

      <div className={style.home_container}>

        <img src="./assets/blob-haikei.svg" alt="" />
        
        <div className={style.home_title}>
          <h1>Hello World!</h1>
        </div>

        <div className={style.home_button}>
          <a href='#'><i class="fi fi-sr-arrow-down"></i></a>
        </div>

      </div>

    </section>
  );
}


