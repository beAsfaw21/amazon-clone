import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const footerGroups = [
  {
    title: 'Get to Know Us',
    links: [
      ['About Amazon', '/all'],
      ['Careers', '/sell'],
      ['Amazon Science', '/service'],
    ],
  },
  {
    title: 'Make Money with Us',
    links: [
      ['Sell products on Amazon', '/sell'],
      ['Sell apps on Amazon', '/sell'],
      ['Advertise Your Products', '/sell'],
    ],
  },
  {
    title: 'Amazon Payment Products',
    links: [
      ['Amazon Business Card', '/service'],
      ['Shop with Points', '/service'],
      ['Reload Your Balance', '/service'],
    ],
  },
  {
    title: 'Let Us Help You',
    links: [
      ['Your Account', '/account'],
      ['Your Orders', '/orders'],
      ['Shipping Rates & Policies', '/service'],
      ['Returns & Replacements', '/service'],
      ['Help', '/service'],
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
