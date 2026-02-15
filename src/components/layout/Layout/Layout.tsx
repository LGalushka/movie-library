import type React from 'react';
import styles from './Layout.module.css';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar/Sidebar';
import { Footer } from '../Footer/Footer';

interface LayoutProps {
  children: React.ReactNode; //сюда MoviGrid
  onSearch: (query: string) => void; // функция поиска из Header
}

export const Layout = ({ children, onSearch }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header onSearch={onSearch} />

      <div className={styles.mainContainer}>
        <Sidebar />

        <main className={styles.content}>
          {children} {/**здесь будет MovieGrid или другие страницы */}
        </main>
      </div>
      <Footer />
    </div>
  );
};
