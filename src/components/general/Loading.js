import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import './Loading.scss';

function Loading(props) {
  const { promiseInProgress } = usePromiseTracker({ delay: 1000 });

  const _onContextMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    promiseInProgress &&
    <div
      className="fixed inset-0 w-screen h-screen bg-black z-50"
      onContextMenu={_onContextMenu}
    >
      <div className="center">
        <div className="ring select-none"></div>
        <span className="select-none">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;