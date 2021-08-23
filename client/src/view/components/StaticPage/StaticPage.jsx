import React from 'react';
import PropTypes from 'prop-types';

StaticPage.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired
};

function StaticPage({ title, htmlContent }) {
  document.title = title;

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

export default StaticPage;
