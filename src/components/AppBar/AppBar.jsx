import React from 'react';
import Navigetion from './Navigation';
import s from './AppBar.module.scss';

const AppBar = () => {
  return (
    <header className={s.pageHeader}>
      <div className={s.containerHeader}>
        <Navigetion />
      </div>
    </header>
  );
};

export default AppBar;
