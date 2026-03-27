import { useParams, useNavigate, Link } from 'react-router-dom';
import Button from '../components/Button';
import { provinces } from '../data/provinces';
import { lgus } from '../data/lgus';
import { lguTransactions } from '../data/transactions';
import './LguPage.css';

function LguPage() {
  const { provinceSlug, lguSlug } = useParams<{ provinceSlug: string; lguSlug: string }>();
  const navigate = useNavigate();

  const province = provinces.find((p) => p.slug === provinceSlug);
  const provinceLGUs = provinceSlug ? lgus[provinceSlug] : undefined;
  const lgu = provinceLGUs?.find((l) => l.slug === lguSlug);

  if (!province || !lgu) {
    return (
      <main className="lgu-page">
        <div className="container">
          <div className="lgu-page__not-found">
            <h2>LGU not found</h2>
            <p>The municipality or city you're looking for doesn't exist.</p>
            <Button onClick={() => navigate(province ? `/province/${province.slug}` : '/')}>
              Back to {province ? province.name : 'Home'}
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="lgu-page">
      {/* LGU Header */}
      <section className="lgu-header">
        <div className="lgu-header__bg-pattern" />
        <div className="container lgu-header__content">
          <div className="lgu-header__title-row">
            <div className="lgu-header__seal-wrapper">
              <img src={lgu.seal} alt={`${lgu.name} Seal`} className="lgu-header__seal" />
            </div>
            <h1 className="lgu-header__title">{lgu.name}</h1>
          </div>

          <button
            className="lgu-header__back"
            onClick={() => navigate(`/province/${province.slug}`)}
            aria-label={`Go back to ${province.name}`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back
          </button>
        </div>
      </section>

      {/* Transactions Section */}
      <section className="lgu-transactions">
        <div className="container">
          <div className="lgu-transactions__inner">
            <div className="lgu-transactions__header">
              <h2 className="lgu-transactions__title">Select Transaction</h2>
            </div>

            <div className="lgu-transactions__grid">
              {lguTransactions.map((group) => (
                <div key={group.category} className="transaction-group">
                  <h3 className="transaction-group__title">{group.category}</h3>
                  <div className="transaction-list">
                    {group.items.map((item) => {
                      const isAvailable = ['bpls-billing', 'rpt-billing', 'new-business', 'renew-business', 'online-payment-order'].includes(item.slug);
                      
                      const content = (
                        <>
                          <span className="transaction-item__text">{item.title}</span>
                          <svg className="transaction-item__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </>
                      );
                      
                      if (isAvailable) {
                        return (
                          <Link to={`/lgu/${province.slug}/${lgu.slug}/transaction/${item.slug}`} key={item.title} className="transaction-item">
                            {content}
                          </Link>
                        );
                      }
                      
                      return (
                        <div key={item.title} className="transaction-item transaction-item--disabled" onClick={() => alert("This feature is currently under development.")}>
                          {content}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="lgu-transactions__actions">
              <Button variant="outline" className="lgu-transactions__search-btn">
                SEARCH PAYMENTS
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LguPage;
