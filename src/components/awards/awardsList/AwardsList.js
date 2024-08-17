import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  fetchAwards,
  orderAward,
} from '../../../redux/awards/awardsOperations';
import {
  getAllAwards,
  getLoading,
} from '../../../redux/awards/awardsSelectors';
import sprite from '../awardsImages/sprite.svg';
import styles from './awardsList.module.css';
import AwardsSubmitButton from '../awardsSubmitButton/AwardsSubmitButton';
import Loader from 'react-loader-spinner';
import CongratsModal from '../CongratsModal/CongratsModal';
import { resetAwards, resetGiftsId } from '../../../redux/awards/awardsActions';

export default function AwardsList() {
  const dispatch = useDispatch();
  const awards = useSelector(getAllAwards);
  const isLoadingAwards = useSelector(getLoading);

  const [gifts, setGifts] = useState(awards);
  const [showModal, setShowModal] = useState(false);

  const onFetchAwards = () => dispatch(fetchAwards());
  useEffect(() => {
    onFetchAwards();
  }, []);

  useEffect(() => {
    setGifts(awards);
  }, [awards]);

  const onClose = () => {
    setShowModal(false);
    dispatch(resetAwards());
    dispatch(resetGiftsId());
  };

  const { t } = useTranslation();

  const onHandleSubmit = () => {
    setShowModal(true);
  };

  const setSelected = event => {
    const { name } = event.target;
    setGifts(prev =>
      prev.map(gift =>
        Number(gift.id) === Number(name)
          ? { ...gift, isSelected: !gift.isSelected }
          : gift,
      ),
    );
  };

  return (
    <div className={styles.Awards__Container}>
      <div className={styles.Awards__LoaderContainer}>
        {isLoadingAwards && (
          <Loader type="ThreeDots" color="#ffbc33" height={50} width={50} />
        )}
      </div>
      <ul className={styles.Awards__List}>
        {gifts.map(award => (
          <li className={styles.Awards__ListItem} key={award.id}>
            <div className={styles.Awards__ListItemWrapper}>
              <img
                src={award.imageUrl}
                alt={award.title}
                className={styles.Awards__ListImage}
              />
              <div className={styles.Awards__ListFooter}>
                <h3 className={styles.Awards__ListName}>{t(award.title)}</h3>
                <div className={styles.Awards__ListTextWrapper}>
                  <p className={styles.Awards__ListText}>
                    {award.price} {t('POINTS')}
                  </p>
                </div>
                <div className={styles.Switch}>
                  <svg className={styles.Switch__iconCheck}>
                    <use
                      href={sprite + '#icon-check'}
                      aria-label="Иконка галочка"
                      width="10"
                      height="8"
                    ></use>
                  </svg>
                  <div className={styles.Switch__control}>
                    <input
                      className={styles.Switch__toggle}
                      type="checkbox"
                      name={award.id}
                      id={award.id}
                      checked={award.isSelected}
                      aria-label="Переключить между выбрано и не выбрано"
                      onChange={setSelected}
                    />
                    <label
                      aria-hidden="true"
                      className={styles.Switch__track}
                      htmlFor={award.id}
                    ></label>
                    <div
                      aria-hidden="true"
                      className={styles.Switch__marker}
                    ></div>
                  </div>
                  <svg className={styles.Switch__iconSign}>
                    <use
                      href={sprite + '#icon-sign'}
                      role="img"
                      aria-label="Иконка внимание"
                      width="5"
                      heigth="18"
                    ></use>
                  </svg>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {showModal && <CongratsModal onClose={onClose} giftsList={gifts} />}
      <AwardsSubmitButton onHandleSubmit={onHandleSubmit} />

      <marquee
        className={styles.running__string}
        direction="left"
        behavior="scroll"
      >
        {t('Take your')} <span className={styles.presents}>{t('GIFTS')} </span>
        {t('now')}
      </marquee>
    </div>
  );
}
