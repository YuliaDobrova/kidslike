import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../planningCards/PlanningCards.module.css';
import sprite from '../image/symbol-defs.svg';
import dataDays from '../data/dataDays.json';
import declOfNum from '../../../utils/declOfNum';

const initialState = {
  isVisible: false,
};

const daysName = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const PlanningCardItem = ({ onAddActiveTask, task }) => {
  const daysActive = useMemo(
    () => task.days.map(itemDay => itemDay.isActive),
    [task.days],
  );

  const [visible, setVisible] = useState(initialState.isVisible);
  const [checkDays, setCheckDays] = useState(daysActive);

  const { t } = useTranslation();

  const toggleVisible = e => {
    setVisible(({ isVisible }) => ({ isVisible: !isVisible }));
  };
  const onHandleChange = index => {
    const newCheckDays = checkDays.map((day, idx) => {
      if (idx === index) {
        return !day;
      }
      return day;
    });
    setCheckDays(newCheckDays);
  };

  const onHandleSubmit = e => {
    const taskId = task._id;
    toggleVisible();
    onAddActiveTask(taskId, { days: checkDays });
  };

  return (
    <li className={styles.cardItem}>
      <img
        width="280"
        height="194"
        className={styles.cardImg}
        src={task.imageUrl}
        alt={task.title}
      />
      <div className={styles.cadrFooter}>
        <div>
          <p className={styles.cardName}>{t(task.title)}</p>
          <p className={styles.cardReward}>
            {`${task.reward} ${declOfNum(task.reward, [
              t('point1'),
              t('point'),
              t('points'),
            ])}`}
          </p>
        </div>
        {visible.isVisible ? (
          <button
            className={styles.buttonOk}
            onClick={onHandleSubmit}
            type="submit"
            id={task.id}
          >
            <svg className={styles.okIcon} width="12" height="12">
              <use href={sprite + '#icon-ok'}></use>
            </svg>
          </button>
        ) : (
          <button
            className={styles.buttonPluse}
            onClick={toggleVisible}
            type="button"
          >
            <svg className={styles.plusIcon} width="12" height="12">
              <use href={sprite + '#icon-plus'}></use>
            </svg>
          </button>
        )}
      </div>
      {visible.isVisible && (
        <ul className={styles.daysCheckbox}>
          {checkDays.map((isCheck, idx) => (
            <li className={styles.daysCheckboxItem} key={daysName[idx]}>
              <label className={styles.checkboxLabel}>
                <input
                  name={dataDays[idx].name}
                  type="checkbox"
                  checked={isCheck}
                  onChange={() => onHandleChange(idx)}
                  className={styles.checkboxInput}
                />
                {t(daysName[idx])}
              </label>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default PlanningCardItem;
