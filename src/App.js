import styles from './App.module.sass';
import Header from './components/header/header';
import About from './components/sections/about-me/about';

export default function App() {
  return (
    <main className={styles.main}>
       <Header/>
       <About/>
    </main>
  );
}

