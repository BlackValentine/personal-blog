import React from 'react';
import './SvgLogo.scss';

function SvgLogo(props) {
  return (
    <div className="cursor-pointer">
      <svg className="svg-animation" viewBox="0 0 300 100">
        <symbol id="s-text">
          <text textAnchor="middle"
            x="50%"
            y="60%"
            className="text--line"
          >
            Black Valentine
          </text>
        </symbol>
        <g className="g-ants">
          <use href="#s-text"
            className="text-copy"></use>
          <use href="#s-text"
            className="text-copy"></use>
          <use href="#s-text"
            className="text-copy"></use>
          <use href="#s-text"
            className="text-copy"></use>
          <use href="#s-text"
            className="text-copy"></use>
        </g>
      </svg>
    </div>
  );
}

export default SvgLogo;