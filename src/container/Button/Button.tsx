import styles from './Button.module.css';

interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

export const Button = ({ text, onClick, disabled }: ButtonProps) => {
  return (
    <button style={styles} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};
