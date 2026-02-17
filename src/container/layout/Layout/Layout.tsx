import type React from 'react';
import styles from './Layout.module.css';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';
import { Footer } from '../Footer';

interface LayoutProps {
  children: React.ReactNode;
  onSearch?: (query: string) => void;
}

export const Layout = ({ children, onSearch }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header onSearch={onSearch} />

      <div className={styles.container}>
        <Sidebar />
        <main className={styles.content}>{children}</main>
      </div>
      <Footer />
    </div>
  );
};
