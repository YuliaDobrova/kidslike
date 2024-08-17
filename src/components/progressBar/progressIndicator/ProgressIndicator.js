import React from 'react';
import styles from './ProgressIndicator.module.css';

const ProgressIndicator = ({ progress }) => {
  return (
    <div className={styles.progressIndicatorContainer}>
      <div
        className={styles.progressIndicator}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};
export default ProgressIndicator;
