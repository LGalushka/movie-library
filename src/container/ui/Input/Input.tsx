import type React from 'react';
import styles from './Input.module.css';

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}

export const Input = ({ value, onChange, placeholder, type }: InputProps) => {
  return (
    <input
      className={styles.input}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
