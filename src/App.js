import styles from './App.module.sass';
import Header from './components/header/header';
import About from './components/sections/about-me/about';
import Home from './components/sections/home/home'
export default function App() {
  return (
    <main className={styles.main}>
       <Header/>
       <Home/>
       <About/>
    </main>
  );
}

