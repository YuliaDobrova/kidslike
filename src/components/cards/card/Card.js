import React from 'react';
import CardBody from '../cardBody/CardBody';
import CardFooter from '../cardFooter';
import styles from './Card.module.css';

const Card = ({ data }) => {
  const { title, imageUrl } = data;
  return (
    <div className={styles.cardContainer}>
      <CardBody imageUrl={imageUrl} title={title} />
      <CardFooter {...data} />
    </div>
  );
};

export default Card;
