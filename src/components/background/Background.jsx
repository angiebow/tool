"use client"
import React, { Children } from 'react'
import styles from './background.module.css'


const Background = () => {
  return (
    <div className={styles.container}>
      <div className={styles.white}></div>
    </div>
  );
};

export default Background;