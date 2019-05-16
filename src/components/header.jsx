import React, { useState, useEffect, useReducer } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { FaHome, FaScroll, FaLink, FaBars } from 'react-icons/fa';
import useWindowWidth from '../hooks/useWindowWidth';
import colors from '../colors';

const NavBarStyle = styled.nav`
  min-height: 56px;
  color: ${colors.black};
  background-color: ${colors.primary};
  font-size: 24px;
  display: flex;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
`;

const MenuStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${colors.primary};
  color: ${colors.white};
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
    <>
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
    </>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
