import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Language Cards</h1>
      <nav>
        <a href="/">Главная</a>
        <a href="/training">Тренировка</a>
      </nav>
    </header>
  );
};