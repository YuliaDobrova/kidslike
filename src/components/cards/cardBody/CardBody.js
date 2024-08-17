import React from 'react';
import styles from './CardBody.module.css';

const CardBody = ({ imageUrl, title }) => {
  return (
    <img
      src={imageUrl}
      alt={title}
      className={styles.img}
      width="280"
      height="194"
    />
  );
};

export default CardBody;
