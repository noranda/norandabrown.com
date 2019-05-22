import React from 'react';
import PropTypes from 'prop-types';

import ScrollToNext from '../../components/ScrollToNext';

import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              I <span className="highlight">design</span> and <span className="highlight">code</span> things.
            </p>
            <p>
              I enjoy building prototypes and production sites using{' '}
              <span className="highlight">Javascript</span> frameworks like{' '}
              <span className="highlight">Ember</span> and <span className="highlight">React</span>.
              I work for a non-profit designing and building prototype
              <span className="highlight"> health apps</span> to improve healthcare.
            </p>
            <p>
              My current stack includes React, Redux, Ember, and Ruby on Rails, but I am always{' '}
              <span className="highlight">learning new technologies</span>.
            </p>
            <p className="text-emoji" style={{ color: colorPrimary }}>
              (｡◕‿◕｡)
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
