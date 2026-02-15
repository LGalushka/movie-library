import styles from './Sidebar.module.css';

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <ul>
        <li>Все</li>
        <li>Хочу посмотреть</li>
        <li>Просмотрено</li>
        <li>Боевик</li>
        <li>Комедии</li>
      </ul>
    </aside>
  );
};
