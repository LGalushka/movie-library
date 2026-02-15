import { useState } from 'react';
import styles from './Header.module.css';
import { Input } from '../../ui/Input/Input';
import { Button } from '../../ui/Button/Button';

interface HeaderProps {
  onSearch: (query: string) => void;
}

export const Header = ({ onSearch }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>🎬 Movie Library</h1>
      <div className={styles.searchContainer}>
        <Input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Введите название фильма..."
        />
        <Button text="Найти" onClick={handleSearch} />
      </div>
    </header>
  );
};
