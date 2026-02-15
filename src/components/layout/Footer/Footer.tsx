import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <h2> © {new Date().getFullYear()} Библиотека фильмов | Данные от OMDb API</h2>
    </div>
  );
};
