import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <p className="footer__text">© {year} Filipizen. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
