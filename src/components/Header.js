import React from 'react';

const Header = () => (
  <header className="site-header">
    <a href="https://asana.com/" target="_blank" rel="noopener noreferrer">
      <img className="asana-logo" src={"/images/asana_logo.png"} alt="asana" />
    </a>
    <h1>Puppy image gallery</h1>
    <blockquote className="site-header__quote">
      <p>A dog will teach you unconditional love. If you can have that in your life, things won't be too bad.</p>
      <cite>&mdash;Robert Wagner</cite>
    </blockquote>
  </header>
);

export default Header;
