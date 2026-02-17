import React, { useState } from 'react';
import styles from './Header.module.css';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';

interface HeaderProps {
  onSearch?: (qury: string) => void;
}

export const Header = ({ onSearch }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = () => {
    if (searchQuery.trim() && onSearch) {
      onSearch(searchQuery);
      setSearchQuery('');
    }
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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Введите название фильма..."
        />
        <Button text="Поиск" onClick={handleSearch} disabled={!searchQuery.trim()} />
      </div>
    </header>
  );
};
