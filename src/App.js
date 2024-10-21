import style from './App.module.sass';
import Header from './components/structure/header/header';
import About from './components/sections/about-me/about';
import Home from './components/sections/home/home'
import Projects from './components/sections/projects/projects';
import Skills from './components/sections/skills/skills';
import Footer from './components/structure/footer/footer';

export default function App() {
  return (
    <main className={style.main}>
       <Header/>
       <Home/>
       <About/>
       <Skills/>
       <Projects/>
       <Footer/>
    </main>
  );
}

