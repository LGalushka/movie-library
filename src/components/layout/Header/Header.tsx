import { useState } from 'react';
import styles from './Header.module.css';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };
  return (
    <div className={styles.wrapper}>
      <h1>🎬 Movies Library</h1>
      <Input
        type="text"
        value={searchQuery}
        placeholder="Введите название фильма..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <Button text="Поиск" onClick={handleSearch} />
    </div>
  );
};

export default Header;
