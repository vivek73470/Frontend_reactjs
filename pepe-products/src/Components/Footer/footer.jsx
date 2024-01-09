import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/footer.css';

function Footer() {
  const footerSections = [
    {
      title: 'Customer Service',
      links: [
        { path: '/contact', title: 'Contact Us' },
        { path: '/faq', title: 'FAQ' },
        { path: '/shipping', title: 'Shipping Information' },
      ],
    },
    {
      title: 'Quick Links',
      links: [
        { path: '/', title: 'Home' },
        { path: '/mencloths', title: 'Mens Collection' },
        { path: '/womencloths', title: 'Womens Collection' },
      ],
    },
    {
      title: 'Policies',
      links: [
        { path: '/terms', title: 'Terms of Service' },
        { path: '/privacy', title: 'Privacy Policy' },
        { path: '/returns', title: 'Return Policy' },
      ],
    },
  ];

  return (
    <footer className='footer-container'>
      <div className='footer-content'>
        {footerSections.map((section) => (
          <div key={section.title} className="footer-section">
            <h3>{section.title}</h3>
            <ul>
              {section.links.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        {/* Additional content for the bottom of the footer */}
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;