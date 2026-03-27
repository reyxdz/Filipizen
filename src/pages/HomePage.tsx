import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Images/logo/logo.png';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';
import { provinces } from '../data/provinces';
import './HomePage.css';

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const filteredProvinces = useMemo(() => {
    if (!searchQuery.trim()) return provinces;
    const query = searchQuery.toLowerCase();
    return provinces.filter((province) =>
      province.name.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__bg-pattern" />
        <div className="hero__content container">
          <div className="hero__logo-container">
            <img src={logo} alt="Filipizen Logo" className="hero__logo" />
          </div>
          <h1 className="hero__title">
            Your Gateway to <br />
            <span className="hero__highlight">Online Government Services</span>
          </h1>
          <p className="hero__subtitle">
            Search and access partner LGU services across the Philippines
          </p>
          <SearchBar
            placeholder="Search Partner LGU or Province..."
            value={searchQuery}
            onChange={setSearchQuery}
          />
        </div>
      </section>

      {/* Province Grid Section */}
      <section className="provinces">
        <div className="container">
          <div className="provinces__header">
            <h2 className="provinces__title">Partner Provinces</h2>
            <p className="provinces__subtitle">
              Select a province to view its partner LGUs
            </p>
          </div>

          {filteredProvinces.length === 0 ? (
            <div className="provinces__empty">
              <p>No provinces found matching "<strong>{searchQuery}</strong>"</p>
            </div>
          ) : (
            <div className="provinces__grid">
              {filteredProvinces.map((province) => (
                <Card
                  key={province.slug}
                  title={province.name}
                  onClick={() => navigate(`/province/${province.slug}`)}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default HomePage;
