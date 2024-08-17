import React, { useContext, useEffect, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '../../modal/Modal';
import ModalClose from '../../modal/modalClose/ModalClose';
import styles from './CongratsModal.module.css';
import catImage from '../awardsImages/catModal.png';
import sadCatImage from '../awardsImages/sadCatModal.png';
import wonderCatImage from '../awardsImages/wonderCatModal.png';
import { useSelector, useDispatch } from 'react-redux';
import {
  getAllAwards,
  getGiftIds,
} from '../../../redux/awards/awardsSelectors';
import { ThemeContext } from '../../../App';
import cx from 'classnames';
import { getUserBalance } from '../../../redux/auth/authSelectors';
import { orderAward } from '../../../redux/awards/awardsOperations';

const CongratsModal = ({ onClose, giftsList }) => {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);
  const balance = useSelector(getUserBalance);
  const { t } = useTranslation();
  const awards = useSelector(getAllAwards);
  const selectedAwardsId = useSelector(getGiftIds);
  const checkedGiftList = giftsList.filter(({ isSelected }) => isSelected);

  const congratsAwards = awards.filter(({ id }) =>
    selectedAwardsId.includes(id),
  );

  const congratsAwardsBalance = checkedGiftList.reduce((acc, { price }) => {
    acc += price;
    return acc;
  }, 0);

  // const [isAwards, setIsAwards] = useState(congratsAwardsBalance <= balance);
  // const getIsAwards = () => congratsAwardsBalance <= balance;

  const isAwards = useMemo(() => congratsAwardsBalance <= balance, []);
  const isGiftList = checkedGiftList.length;

  useEffect(() => {
    const data = checkedGiftList.map(gift => Number(gift.id));
    isAwards &&
      dispatch(
        orderAward({
          giftIds: data,
        }),
      );
  }, []);

  return (
    <Modal onClose={onClose}>
      <ModalClose onClose={onClose} />
      <div
        className={cx(
          styles.CongratsModal__Wrapper,
          styles[theme.colors.modalBg],
        )}
      >
        <img
          className={styles.CongratsModal__CatImage}
          src={!isGiftList ? wonderCatImage : isAwards ? catImage : sadCatImage}
          alt="cat"
        />
        <h3
          className={cx(styles.CongratsModal__Title, styles[theme.colors.text])}
        >
          {!isGiftList
            ? t('You forgot to choose your gift') + `😉`
            : isAwards
            ? t('Congratulations You get')
            : t('Not enough points for a gift yet') + `😏`}
        </h3>
        {isGiftList && isAwards ? (
          <ul className={styles.CongratsModal__List}>
            {congratsAwards.map(award => (
              <li className={styles.CongratsModal__ListItem} key={award.id}>
                <img
                  className={styles.CongratsModal__Image}
                  src={award.imageUrl}
                  alt={award.title}
                />
                <p className={styles.CongratsModal__Text}>{award.title}</p>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </Modal>
  );
};

export default CongratsModal;
