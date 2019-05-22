import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { toElement as scrollToElement } from '../../utils/scroll';

import './style.scss';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = { isSticky: false };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ isSticky: window.pageYOffset > this.nav.offsetTop });
  }

  scrollToPage(pageSelector) {
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    const {
      theme: { colorPrimary, bgPrimary, navAlpha },
      switchTheme
    } = this.context;
    const { isSticky } = this.state;
    const stickyClass = isSticky ? 'sticky' : '';
    const stickyStyles = isSticky
      ? { backgroundColor: navAlpha, color: colorPrimary }
      : { backgroundColor: bgPrimary, color: colorPrimary };

    return (
      <nav className={stickyClass} ref={(elem) => { this.nav = elem; }} style={stickyStyles}>
        <div className="magic-wand bounce-xy" onClick={(e) => switchTheme()}>
          <button href="#"><FontAwesomeIcon icon="magic" size="lg" style={{ color: colorPrimary }} /></button>
          <div className="magic-text">Color Me</div>
        </div>
        <style jsx="true">
          {`
            .menu__item:hover {
              border-bottom: 2px solid ${colorPrimary};
            }
          `}
        </style>
        <div className="menu">
          <div
            className="menu__item active"
            onClick={(e) => this.scrollToPage('.about-page')}
          >
            About
          </div>
          <div
            className="menu__item"
            onClick={(e) => this.scrollToPage('.portfolio-page')}
          >
            Portfolio
          </div>
        </div>
      </nav>
    );
  }
}

Nav.contextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
};

export default Nav;
