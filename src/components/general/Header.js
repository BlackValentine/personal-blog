import React from 'react';
import SvgLogo from './SvgLogo';

function Header(props) {
  return (
    <div className='flex'>
      <div className="m-auto">
        <SvgLogo />
      </div>
    </div>
  );
}

export default Header;