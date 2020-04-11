import React from 'react';
import { HeaderWrapper, IconLink } from './styles.js'

function Header() {
  return (
    <HeaderWrapper>
      <h1>FASHONISTA</h1>

      <div>
          <IconLink href='#'>
            <i className="fa fa-search" aria-hidden="true"></i>
          </IconLink>
          <IconLink href='#'>
            <i className="fa fa-shopping-bag" aria-hidden="true"></i>
          </IconLink>
      </div>
    </HeaderWrapper>
  );
}

export default Header;