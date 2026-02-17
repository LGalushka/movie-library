import { Button } from '../../ui/Button';
import styles from './Sidebar.module.css';
import { useState } from 'react';

type MenuItem = 'home' | 'favorites' | 'settings';

interface MENU {
  id: MenuItem;
  label: string;
}
const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<MenuItem>('home');

  const menuItems: MENU[] = [
    { id: 'home', label: '🏠 Главная' },
    { id: 'favorites', label: '❤️ Избранное' },
    { id: 'settings', label: '⚙️ Настройки' },
  ];

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        {menuItems.map((item) => (
          <Button
            key={item.id}
            text={item.label}
            onClick={() => setActiveItem(item.id)}
            variant={activeItem === item.id ? 'primary' : 'secondary'}
            fullWidth
            size="md"
          />
        ))}
      </nav>
      <div className={styles.footer}>
        <Button text="Фильтры" variant="secondary" size="sm" onClick={() => {}} />
      </div>
    </aside>
  );
};

export default Sidebar;
