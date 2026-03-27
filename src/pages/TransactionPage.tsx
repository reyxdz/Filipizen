import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import { provinces } from '../data/provinces';
import { lgus } from '../data/lgus';
import { lguTransactions, type Transaction } from '../data/transactions';
import './TransactionPage.css';

function TransactionPage() {
  const { provinceSlug, lguSlug, transactionSlug } = useParams<{
    provinceSlug: string;
    lguSlug: string;
    transactionSlug: string;
  }>();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [appType, setAppType] = useState('new');

  const province = provinces.find((p) => p.slug === provinceSlug);
  const provinceLGUs = provinceSlug ? lgus[provinceSlug] : undefined;
  const lgu = provinceLGUs?.find((l) => l.slug === lguSlug);

  let transaction: Transaction | undefined;
  for (const group of lguTransactions) {
    const found = group.items.find((t) => t.slug === transactionSlug);
    if (found) {
      transaction = found;
      break;
    }
  }

  if (!province || !lgu || !transaction) {
    return (
      <main className="transaction-page">
        <div className="container">
          <div className="transaction-page__not-found">
            <h2>Transaction not found</h2>
            <p>The transaction or LGU you're looking for doesn't exist.</p>
            <Button
              onClick={() =>
                navigate(province && lgu ? `/lgu/${province.slug}/${lgu.slug}` : '/')
              }
            >
              Back
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="transaction-page">
      {/* LGU Header (No internal back button, as requested in mockup) */}
      <section className="lgu-header">
        <div className="lgu-header__bg-pattern" />
        <div className="container lgu-header__content" style={{ justifyContent: 'flex-start' }}>
          <div className="lgu-header__title-row">
            <div className="lgu-header__seal-wrapper">
              <img src={lgu.seal} alt={`${lgu.name} Seal`} className="lgu-header__seal" />
            </div>
            <h1 className="lgu-header__title">{lgu.name}</h1>
          </div>
        </div>
      </section>

      {/* Transaction Content */}
      <section className="transaction-content">
        <div className="container transaction-content__inner">
          <div className="transaction-card">
            <h2 className="transaction-card__title">
              {transaction.slug === 'new-business' && 'New Business Registration'}
              {transaction.slug === 'renew-business' && 'Business Renewal Application'}
              {transaction.slug !== 'new-business' && transaction.slug !== 'renew-business' && transaction.title}
            </h2>
            
            {(transaction.slug === 'bpls-billing' || transaction.slug === 'rpt-billing' || transaction.slug === 'online-payment-order') && (
              <>
                <div className="transaction-card__header">
                  <h3 className="transaction-card__subtitle">Email Verification</h3>
                  <p className="transaction-card__desc">
                    A validation key will be sent to your email or mobile phone. Please make sure your email is valid and you have access to it.
                  </p>
                </div>

                <form className="transaction-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="transaction-form__fields">
                    <Input label="Email Address" type="email" placeholder="" />
                    <Input label="Mobile No." type="tel" placeholder="(0000) 000-0000" />
                  </div>

                  <div className="transaction-form__actions">
                    <button
                      type="button"
                      className="transaction-btn transaction-btn--back"
                      onClick={() => navigate(`/lgu/${province.slug}/${lgu.slug}`)}
                    >
                      BACK
                    </button>
                    <button
                      type="button"
                      className="transaction-btn transaction-btn--next"
                      disabled
                    >
                      NEXT
                    </button>
                  </div>
                </form>
              </>
            )}

            {(transaction.slug === 'new-business' || transaction.slug === 'renew-business') && step === 1 && (
              <>
                <div className="transaction-card__header">
                  <h3 className="transaction-card__subtitle">Select Application Type</h3>
                </div>

                <form className="transaction-form" onSubmit={(e) => {
                  e.preventDefault();
                  if (appType === 'new') {
                    setStep(2);
                  }
                }}>
                  <div className="transaction-form__fields radio-group">
                    <label className="radio-label">
                      <input 
                        type="radio" 
                        name="applicationType" 
                        value="new" 
                        checked={appType === 'new'}
                        onChange={(e) => setAppType(e.target.value)}
                      />
                      <span>Create New Application</span>
                    </label>
                    <label className="radio-label">
                      <input 
                        type="radio" 
                        name="applicationType" 
                        value="resume" 
                        checked={appType === 'resume'}
                        onChange={(e) => setAppType(e.target.value)}
                      />
                      <span>Resume Pending Application</span>
                    </label>
                    {appType === 'resume' && (
                      <div style={{ paddingLeft: '28px', paddingTop: '4px' }}>
                        <div className="input-wrapper" style={{ marginBottom: 0 }}>
                          <input 
                            type="text" 
                            className="input-field" 
                            placeholder="Application Tracking No." 
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="transaction-form__actions">
                    <button
                      type="button"
                      className="transaction-btn transaction-btn--back"
                      onClick={() => navigate(`/lgu/${province.slug}/${lgu.slug}`)}
                    >
                      CANCEL
                    </button>
                    <button
                      type={appType === 'new' ? 'submit' : 'button'}
                      className={appType === 'new' ? 'transaction-btn transaction-btn--primary' : 'transaction-btn transaction-btn--next'}
                      disabled={appType === 'resume'}
                    >
                      NEXT
                    </button>
                  </div>
                </form>
              </>
            )}

            {(transaction.slug === 'new-business' || transaction.slug === 'renew-business') && step === 2 && (
              <>
                <div className="transaction-card__header">
                  <h3 className="transaction-card__subtitle">Contact Verification</h3>
                  <p className="transaction-card__desc">
                    A validation key will be sent to your email or mobile phone. Please make sure your email is valid and you have access to it.
                  </p>
                </div>

                <form className="transaction-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="transaction-form__fields">
                    <Input label="Full Name*" type="text" placeholder="" />
                    <Input label="Address*" type="text" placeholder="" />
                    <Input label="Email Address*" type="email" placeholder="" />
                    <Input label="Mobile No." type="tel" placeholder="(0000) 000-0000" />
                  </div>

                  <div className="transaction-form__actions">
                    <button
                      type="button"
                      className="transaction-btn transaction-btn--back"
                      onClick={() => setStep(1)}
                    >
                      BACK
                    </button>
                    <button
                      type="button"
                      className="transaction-btn transaction-btn--next"
                      disabled
                    >
                      NEXT
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default TransactionPage;
