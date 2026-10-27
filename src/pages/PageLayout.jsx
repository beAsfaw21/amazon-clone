import React from 'react';
import './PageLayout.css';

function PageLayout({ title, description, children }) {
  return (
    <main className="page-layout">
      <section className="page-layout__card">
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
      </section>
    </main>
  );
}

export default PageLayout;
