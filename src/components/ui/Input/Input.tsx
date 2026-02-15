import type React from 'react';
import styles from './Input.module.css';

interface InputProps {
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value: string;
}

export const Input = ({ type = 'text', onChange, placeholder, value }: InputProps) => {
  return (
    <input
      className={styles.container}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      value={value}
    />
  );
};
