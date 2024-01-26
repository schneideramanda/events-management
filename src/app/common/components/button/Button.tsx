import './Button.css';

interface ButtonProps {
  label: string;
  fullSize?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const Button = ({ label, fullSize = false, type = 'button', onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} type={type} className={`${fullSize ? 'full-size' : ''}`}>
      {label}
    </button>
  );
};

export default Button;
