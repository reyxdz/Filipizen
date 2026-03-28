import './LoadingScreen.css';
import logoImg from '../assets/Images/logo/logo.png';

interface LoadingScreenProps {
  isVisible: boolean;
}

function LoadingScreen({ isVisible }: LoadingScreenProps) {
  return (
    <div className={`loading-screen ${isVisible ? 'visible' : ''}`}>
      <div className="loading-content">
        <div className="loading-logo-container">
          <img src={logoImg} alt="Loading" className="loading-logo" />
        </div>
        <p className="loading-text">Bringing you there...</p>
      </div>
    </div>
  );
}

export default LoadingScreen;
