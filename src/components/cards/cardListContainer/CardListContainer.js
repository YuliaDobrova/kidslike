import React from 'react';
import styles from './CardListContainer.module.css';

const CardListContainer = ({ children }) => {
  return <div className={styles.cardListContainer}>{children}</div>;
};

export default CardListContainer;
//import { useTranslation } from 'react-i18next';
//const { t } = useTranslation();
//{t('Points')}
