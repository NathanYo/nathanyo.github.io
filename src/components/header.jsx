import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { FaHome, FaScroll } from 'react-icons/fa';

const NavBar = styled.nav`
  height: 56px;
  color: #e64a19;
  background-color: #6ab7ff;
  font-size: 24px;
  display: flex;
  align-items: flex-end;
`;

const Header = ({ siteTitle }) => (
  <header>
    <NavBar>
      <Link
        style={{ textDecoration: 'none', color: 'inherit', flexGrow: 2 }}
        to="/"
      >
        {siteTitle}
      </Link>
      <Link
        style={{
          textDecoration: 'none',
          color: 'inherit',
          textAlign: 'center',
          margin: '0px 8px 0px 8px'
        }}
        to="/"
      >
        <FaHome size="20px" /> <br />
        Home
      </Link>
      <Link
        style={{
          textDecoration: 'none',
          color: 'inherit',
          textAlign: 'center',
          margin: '0px 8px 0px 8px'
        }}
        to="/blog"
      >
        <FaScroll size="20px" /> <br />
        Blog
      </Link>
    </NavBar>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
