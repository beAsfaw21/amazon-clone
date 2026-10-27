import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../PageLayout';

function NotFound() {
  return (
    <PageLayout title="Page not found" description="The page you requested does not exist.">
      <Link className="not-found-link" to="/">Return to the home page</Link>
    </PageLayout>
  );
}

export default NotFound;
