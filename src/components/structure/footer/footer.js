import style from './footer.module.sass'

export default function Footer() {


  return (
    <footer className={style.footer}>
      <div className={style.footer_container}>


        <div className={style.footer_title}>
          <h1>Obrigado pela vista!</h1>
        </div>
        <span></span>

        <div className={style.footer_body}>
          <div className={style.footer_ul}>
            <h1>Navegação</h1>
            <ul className={style.footer_navUl}>
              <li>Inicio</li>
              <li>Sobre Mim</li>
              <li>Carreira</li>
              <li>Projetos</li>
            </ul>
          </div>

          <div className={style.footer_ul}>
            <h1>Contato</h1>
            <ul className={style.footer_contactUl}>
              <li>eduardoprofissional@gmail.com</li>
              <li><a href='https://eduardo-octavio.vercel.app' target='blank'>eduardo-octavio.vercell.app</a></li>
            </ul>
          </div>
        </div>

        <span></span>
        <div className={style.footer_cop}>
          <p>© 2024 - v2.0</p>
          <p>Desenvolvido por Eduardo Octávio</p>
        </div>
      </div>
    </footer>
  );
}


