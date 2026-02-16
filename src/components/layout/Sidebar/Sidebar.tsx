import styles from './Sidebar.module.css';

interface SidebarProps {
  activeItem?: 'categories' | 'favorites'; // какой пункт активен
  onItemClick?: (item: string) => void; // обработчик клика
}

const Sidebar = ({ activeItem, onItemClick }: SidebarProps) => {
  return (
    <aside className={styles.container}>
      <h2 className={styles.title}>Меню</h2>
      <ul className={styles.list}>
        <li
          className={activeItem === 'categories' ? styles.active : ''}
          onClick={() => onItemClick?.('categories')}
        >
          Категории
        </li>
        <li
          className={activeItem === 'favorites' ? styles.active : ''}
          onClick={() => onItemClick?.('favorites')}
        >
          Избранное
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
