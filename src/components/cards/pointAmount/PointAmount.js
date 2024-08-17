import React from 'react';
import { useTranslation } from 'react-i18next';
import s from './PointAmount.module.css';
import declOfNum from '../../../utils/declOfNum';

const PointAmount = ({ reward }) => {
  const { t } = useTranslation();
  return (
    <div className={s.pointAmount}>
      <p className={s.pointAmountText}>
        {`${t(reward)} ${declOfNum(reward, [
          t('point1'),
          t('point'),
          t('points'),
        ])}`}
      </p>
    </div>
  );
};

export default PointAmount;
