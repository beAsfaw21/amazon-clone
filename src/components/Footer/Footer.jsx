import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const footerGroups = [
  {
    title: 'Get to Know Us',
    links: [
      ['About Amazon', '/about'],
      ['Careers', '/careers'],
      ['Amazon Science', '/science'],
    ],
  },
  {
    title: 'Make Money with Us',
    links: [
      ['Sell products on Amazon', '/sell-products'],
      ['Sell apps on Amazon', '/sell-apps'],
      ['Advertise Your Products', '/advertise'],
    ],
  },
  {
    title: 'Amazon Payment Products',
    links: [
      ['Amazon Business Card', '/business-card'],
      ['Shop with Points', '/shop-with-points'],
      ['Reload Your Balance', '/reload-balance'],
    ],
  },
  {
    title: 'Let Us Help You',
    links: [
      ['Your Account', '/account'],
      ['Your Orders', '/orders'],
      ['Shipping Rates & Policies', '/shipping'],
      ['Returns & Replacements', '/returns'],
      ['Help', '/help'],
    ],
  },
];

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="site-footer">
      <button className="back-to-top" type="button" onClick={scrollToTop}>
        <FaArrowUp aria-hidden="true" /> Back to top
      </button>
      <div className="footer-links">
        <div className="footer-links__inner">
          {footerGroups.map((group) => (
            <section key={group.title}>
              <h2>{group.title}</h2>
              <ul>
                {group.links.map(([label, path]) => (
                  <li key={label}><Link to={path}>{label}</Link></li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
      <div className="footer-brand">
        <Link className="footer-logo" to="/">amazon</Link>
        <div className="footer-meta">
          <button type="button">🌐 English</button>
          <button type="button">🇺🇸 United States</button>
        </div>
      </div>
      <div className="footer-legal">
        <span>Conditions of Use</span>
        <span>Privacy Notice</span>
        <span>Your Ads Privacy Choices</span>
        <span>© 2026 Amazon Clone</span>
      </div>
    </footer>
  );
}

export default Footer;
