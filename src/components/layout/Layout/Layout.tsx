import type React from 'react';
import styles from './Layout.module.css';
import { Sidebar } from '../Sidebar/Sidebar';
import { Footer } from '../Footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      {/**Header будет здесь */}

      {/**Основная область */}
      <div className={styles.mainContainer}>
        <Sidebar />

        {/**Основной контект (children) */}
        <main className={styles.main}>{children}</main>

        {/**Footer */}
        <Footer />
      </div>
    </div>
  );
};
