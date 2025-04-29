import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      {/* Header Section Start */}
      <header
        style={{
          background: 'transparent',
          border: 'none',
          boxShadow: 'none',
          margin: 0,
          padding: '10px 20px',
          position: 'absolute',
          width: '100%',
          top: 0,
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '100%',
            margin: '0 auto',
          }}
        >
          <div style={{ flex: 1 }}>
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  textDecoration: 'none',
                  color: '#518a51',
                  fontSize: '38px',
                  letterSpacing: '2px',
                  fontWeight: 'bold',
                }}
              >
                WELLSPHERE
              </Link>
            </h1>
          </div>
          <nav>
            <ul
              style={{
                listStyle: 'none',
                margin: 0,
                padding: 0,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <li style={{ marginLeft: '20px' }}>
                <Link
                  to="/"
                  style={{
                    textDecoration: 'none',
                    color: '#00b894',
                    fontSize: '16px',
                    fontWeight: '500',
                  }}
                >
                  Home
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section Start */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          height: '100vh', // full viewport height
        }}
      >
        <div style={{ position: 'relative', height: '100%' }}>
          <img
            src="https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-goggles_23-2149611193.jpg?ga=GA1.1.302250554.1741105577&semt=ais_hybrid&w=740"
            alt="Healthcare Banner"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              border: 'none',
              outline: 'none',
              display: 'block',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              textAlign: 'center',
              color: '#fff',
              background: 'rgba(0, 0, 0, 0.8)',
              padding: '0 20px',
            }}
          >
            <h2
              style={{
                fontSize: '55px',
                fontWeight: 'bold',
                marginBottom: '20px',
              
              }}
            >
              Revolutionizing Healthcare for Everyone
            </h2>
            <p
              style={{
                fontSize: '15px',
                maxWidth: '800px',
                lineHeight: '1.6',
                color: '#ffffff', // white color
              }}
            >
              WellSphere is your all-in-one healthcare companion, offering AI-powered
              health insights, disease guides, doctor consultations, and support for
              underprivileged communities. Join us in making quality healthcare accessible to all.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
