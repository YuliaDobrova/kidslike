import React from 'react';
import { useTranslation } from 'react-i18next';
import s from './CardTitle.module.css';

const CardTitle = ({ title }) => {
  const { t } = useTranslation();
  return (
    <div>
      <span className={s.cardTitle}>{t(title)}</span>
    </div>
  );
};

export default CardTitle;
