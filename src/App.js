import styles from './App.module.sass';
import Header from './components/header/header';

export default function App() {
  return (
    <main className={styles.main}>
       <Header/>
    </main>
  );
}

