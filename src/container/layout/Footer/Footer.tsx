import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h4>🎬 Movie Library</h4>
          <p>Твой гид в мире кино</p>
        </div>
        <div className={styles.section}>
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#">Главная</a>
            </li>
            <li>
              <a href="#">Избранное</a>
            </li>
            <li>
              <a href="#">О проекте</a>
            </li>
          </ul>
        </div>
        <div className={styles.section}>
          <h4>Контакты</h4>
          <ul>
            <li>
              <a href="#">GitHub</a>
            </li>
            <li>
              <a href="#">Telegram</a>
            </li>
            <li>
              <a href="#">Email</a>
            </li>
          </ul>
        </div>

        <div className={styles.copyright}>© {currentYear} Movie Library. С любовью к кино 🎬</div>
      </div>
    </footer>
  );
};

export default Footer;
