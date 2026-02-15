import styles from './Button.module.css';

interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
}

export const Button = ({
  text,
  onClick,
  disabled,
  variant = 'primary',
  size = 'medium',
}: ButtonProps) => {
  return (
    <button
      className={`${styles.base} ${styles[variant]} ${styles[size]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
