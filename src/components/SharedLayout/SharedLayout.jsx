import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div>
      <nav className={styles['nav']}>
        <ul className={styles['nav-list']}>
          <li className={styles['nav-item']}>
            <Link to="/" className={styles['nav-link']}>Home</Link>
          </li>
          <li className={styles['nav-item']}>
            <Link to="/movies" className={styles['nav-link']}>Movies</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
