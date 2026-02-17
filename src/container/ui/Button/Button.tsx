import styles from './Button.module.css';

interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  icon?: string;
  fullWidth?: boolean;
}

export const Button = ({
  text,
  onClick,
  disabled,
  variant = 'primary',
  size = 'md',
  icon,
  fullWidth = false,
}: ButtonProps) => {
  return (
    <button
      className={`
      ${styles.button}
      ${styles[variant]}
      ${styles[size]}
      ${fullWidth ? styles.fullWidth : ''}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {text}
    </button>
  );
};
