import React from 'react';
import { Link } from 'react-router-dom';
import './InfoPage.css';

function InfoPage({ eyebrow, title, description, sections, action }) {
  return (
    <main className="info-page">
      <section className="info-hero">
        <span>{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </section>
      <section className="info-sections">
        {sections.map((section) => (
          <article className="info-section" key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.content}</p>
            {section.items && (
              <ul>
                {section.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            )}
          </article>
        ))}
      </section>
      {action && (
        <div className="info-action">
          <h2>{action.title}</h2>
          <p>{action.description}</p>
          <Link className="info-button" to={action.to}>{action.label}</Link>
        </div>
      )}
    </main>
  );
}

export default InfoPage;
