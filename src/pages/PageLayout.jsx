import React from 'react';
import './PageLayout.css';

function PageLayout({ title, description, children }) {
  return (
    <main className="page-layout">
      <section className="page-layout__card">
        <h1>{title}</h1>
        <p>{description}</p>
        {children || (
          <div className="page-placeholder">
            <p>Explore the options below to get started.</p>
            <div className="placeholder-grid">
              <div><strong>Easy to use</strong><span>Manage everything in one place.</span></div>
              <div><strong>Fast delivery</strong><span>Track your orders from checkout to door.</span></div>
              <div><strong>Helpful support</strong><span>We are here whenever you need us.</span></div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default PageLayout;
