import { forwardRef, type InputHTMLAttributes } from 'react';
import './Input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className = '', id, ...props }, ref) => {
    const inputId = id || label.replace(/\s+/g, '-').toLowerCase();

    return (
      <div className={`input-wrapper ${className}`}>
        <label htmlFor={inputId} className="input-label">
          {label}
        </label>
        <input ref={ref} id={inputId} className="input-field" {...props} />
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
