import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.sass'; // Assuming you have a CSS module for styling

interface HeaderProps {
  fullName: string;
  avatarUrl: string;
}

const Header: React.FC<HeaderProps> = ({ fullName, avatarUrl }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>Logo</div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link to="/"> Главная</Link>
            </li>
            <li>
              <Link to="/courses">Обучение</Link>
            </li>
            <li>
              <Link to="/section3">Прогресс</Link>
            </li>
            <li>
              <Link to="/section4">Чат</Link>
            </li>
            <li>
              <Link to="/section5">Помощь</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.profile}>
          <span className={styles.fullName}>{fullName}</span>
          <img className={styles.avatar} src={avatarUrl} alt="Avatar" />
        </div>
      </header>
      <div className={styles.border}></div>
    </>
  );
};

export default Header;
