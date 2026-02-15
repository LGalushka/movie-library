import styles from './Sidebar.module.css';

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <h3>Категории</h3>
      <ul>
        <li>Все фильмы</li>
        <li>Хочу посмотреть</li>
        <li>Просмотрено</li>
      </ul>
    </aside>
  );
};
