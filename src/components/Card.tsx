import './Card.css';

interface CardProps {
  image?: string;
  title: string;
  subtitle?: string;
  transactions?: string[];
  onClick?: () => void;
  className?: string;
}

function Card({ image, title, subtitle, transactions, onClick, className = '' }: CardProps) {
  return (
    <div
      className={`card ${onClick ? 'card--clickable' : ''} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {image && (
        <div className="card__image-container">
          <img src={image} alt={title} className="card__image" loading="lazy" />
        </div>
      )}
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        {subtitle && <p className="card__subtitle">{subtitle}</p>}
        {transactions && transactions.length > 0 && (
          <div className="card__transactions">
            {transactions.map((t, idx) => (
              <span key={idx} className="card__transaction-pill">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
