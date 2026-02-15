import type React from 'react';
import styles from './Input.module.css';

interface InputProps {
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value: string;
}

export const Input = ({ type = 'text', onChange, onKeyDown, placeholder, value }: InputProps) => {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
      type={type}
      value={value}
    />
  );
};
