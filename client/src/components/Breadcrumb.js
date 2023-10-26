import React from 'react';

const Breadcrumb = () => (
  <nav className="breadcrumb" aria-label="breadcrumbs">
    <a href="/" title="Back to the frontpage">Home</a>
    <span aria-hidden="true">›</span>
    <span>Sandra Dining Table</span>
  </nav>
);

export default Breadcrumb;
