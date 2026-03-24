import { useParams, useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import { provinces } from '../data/provinces';
import { lgus } from '../data/lgus';
import './ProvincePage.css';

function ProvincePage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const province = provinces.find((p) => p.slug === slug);
  const provinceLGUs = slug ? lgus[slug] : undefined;

  if (!province) {
    return (
      <main className="province-page">
        <div className="container">
          <div className="province-page__not-found">
            <h2>Province not found</h2>
            <p>The province you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/')}>Back to Home</Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="province-page">
      {/* Province Header */}
      <section className="province-header">
        <div className="province-header__bg-pattern" />
        <div className="container province-header__content">
          <button
            className="province-header__back"
            onClick={() => navigate('/')}
            aria-label="Go back to home"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back
          </button>
          <h1 className="province-header__title">{province.name}</h1>
          <p className="province-header__subtitle">
            {provinceLGUs
              ? `${provinceLGUs.length} Partner LGUs`
              : 'Partner LGUs coming soon'}
          </p>
        </div>
      </section>

      {/* LGU Grid */}
      <section className="province-lgus">
        <div className="container">
          {provinceLGUs ? (
            <div className="province-lgus__grid">
              {provinceLGUs.map((lgu) => (
                <Card
                  key={lgu.slug}
                  image={lgu.seal}
                  title={lgu.name}
                  transactions={lgu.transactions}
                />
              ))}
            </div>
          ) : (
            <div className="province-lgus__coming-soon">
              <div className="province-lgus__coming-soon-icon">🏗️</div>
              <h3>Coming Soon</h3>
              <p>
                Partner LGUs for <strong>{province.name}</strong> are being onboarded.
                Check back soon for updates!
              </p>
              <Button variant="outline" onClick={() => navigate('/')}>
                Browse Other Provinces
              </Button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default ProvincePage;
