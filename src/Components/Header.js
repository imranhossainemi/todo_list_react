import React from 'react';
import styles from '../styles/Header.module.css';

const headerStyle = {
  padding: '20px 0',
  lineHeight: '1.5em',
  color: '#aeadad',
  textAlign: 'center',
};

const Header = () => (
  <div className={styles.header} style={headerStyle}>
    <h1>ToDo List</h1>
    <p>with React</p>
  </div>
);

export default Header;
