import React from 'react';
import './index.css';

const App = () => {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container-fluid">
          <div className="logo pull-left">
            <h1>
              <a href="index.html">WELLSPHERE</a>
            </h1>
          </div>
          <nav>
            <ul className="flex space-x-4 nav-menu">
              <li className="menu-active">
                <a href="index.html" className="text-blue-600 font-semibold">Home</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Slider */}
      <section className="slider">
        <div className="slider-container relative">
          <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel">
            {/* Indicators - can be added dynamically */}
            <ol className="carousel-indicators"></ol>

            <div className="carousel-inner" role="listbox">
              {/* Carousel Item */}
              <div className="carousel-item active relative">
                <div className="carousel-background">
                  <img
                    src="https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-goggles_23-2149611193.jpg?ga=GA1.1.302250554.1741105577&semt=ais_hybrid&w=740"
                    alt="Healthcare Revolution"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="carousel-container absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-center p-4">
                  <div className="carousel-content max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                      Revolutionizing Healthcare for Everyone
                    </h2>
                    <p className="text-lg md:text-xl">
                      WellSphere is your all-in-one healthcare companion, offering AI-powered
                      health insights, disease guides, doctor consultations, and support for
                      underprivileged communities. Join us in making quality healthcare accessible to all.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Carousel Item */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
