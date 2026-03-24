import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}

function Button({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) {
  return (
    <button
      className={`btn btn--${variant} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
