import React, { useState, useEffect, useReducer } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaHome, FaScroll, FaLink, FaBars } from 'react-icons/fa';
import useWindowWidth from '../hooks/useWindoWidth';

const NavBarStyle = styled.nav`
  height: 56px;
  color: #e64a19;
  background-color: #6ab7ff;
  font-size: 24px;
  display: flex;
  align-items: flex-end;
`;

const MenuStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #a1e9ff;
  color: #ac0800;
`;

const Header = ({ siteTitle }) => {
  const width = useWindowWidth();
  const [isRenderingButton, setRenderButton] = useState(width < 488);
  useEffect(() => setRenderButton(width < 488), [width]);
  const [isRenderingMenu, dispatchRenderMenu] = useReducer((state, action) => {
    if (!state && width < 488 && action !== 'resize') {
      return true;
    }
    return false;
  }, false);
  useEffect(() => dispatchRenderMenu('resize'), [isRenderingButton]);
  return (
    <header>
      <NavBarStyle>
        {isRenderingButton && (
          <FaBars
            style={{ margin: '0px 20px 0px 10px' }}
            onClick={() => dispatchRenderMenu()}
          />
        )}
        <Link
          style={{ textDecoration: 'none', color: 'inherit', flexGrow: 2 }}
          to="/"
        >
          {siteTitle}
        </Link>
        {width > 488 && (
          <>
            <Link
              style={{
                textDecoration: 'none',
                color: 'inherit',
                textAlign: 'center',
                margin: '0px 8px 0px 8px',
                fontSize: '16px'
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
                margin: '0px 8px 0px 8px',
                fontSize: '16px'
              }}
              to="/blog"
            >
              <FaScroll size="20px" /> <br />
              Blog
            </Link>
            <Link
              style={{
                textDecoration: 'none',
                color: 'inherit',
                textAlign: 'center',
                margin: '0px 8px 0px 8px',
                fontSize: '16px'
              }}
              to="/resources"
            >
              <FaLink size="20px" /> <br />
              Resources
            </Link>
          </>
        )}
      </NavBarStyle>
      {isRenderingMenu && (
        <MenuStyle>
          <Link
            style={{
              textDecoration: 'none',
              color: 'inherit',
              textAlign: 'center',
              margin: '0px 8px 0px 8px',
              fontSize: '30px'
            }}
            to="/"
          >
            <FaHome size="40px" style={{ margin: '10px 10px 0px 0px' }} />
            Home
          </Link>
          <Link
            style={{
              textDecoration: 'none',
              color: 'inherit',
              textAlign: 'center',
              margin: '0px 8px 0px 8px',
              fontSize: '30px'
            }}
            to="/blog"
          >
            <FaScroll size="40px" style={{ marginRight: '10px' }} />
            Blog
          </Link>
          <Link
            style={{
              textDecoration: 'none',
              color: 'inherit',
              textAlign: 'center',
              margin: '0px 8px 0px 8px',
              fontSize: '30px'
            }}
            to="/resources"
          >
            <FaLink size="40px" style={{ marginRight: '10px' }} />
            Resources
          </Link>
        </MenuStyle>
      )}
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
