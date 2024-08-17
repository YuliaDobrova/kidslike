import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Contacts.module.css';
import teamDatas from './team-data/team-data.json';
import foto from './team-data/foto';
import sprite from './images/sprite.svg';
import Footer from '../../components/footer/Footer';
import { ThemeContext } from '../../App';
import cx from 'classnames';

const Contacts = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <div className={styles[theme.colors.background]}>
      <div className="container">
        <div className={styles.container}>
          <h2 className={cx(styles.title, styles[theme.colors.text])}>
            {t('Our Team')}
          </h2>
          <p className={cx(styles.slogan, styles[theme.colors.text])}>
            {t('Always ready for new challenges')}
          </p>
          <ul className={styles.list}>
            {teamDatas.map(data => (
              <li
                className={cx(styles.item, styles[theme.colors.cardBg])}
                key={data.name}
              >
                <img
                  src={foto[data.id]}
                  className={styles.foto}
                  alt={data.name}
                  width="280"
                  height="246"
                />
                <h3 className={cx(styles.itemTitle, styles[theme.colors.text])}>
                  {t(data.name)}
                </h3>
                <p
                  className={cx(styles.itemPosition, styles[theme.colors.text])}
                >
                  {data.position}
                </p>
                <ul className={styles.socialList}>
                  {data.links.map(link => (
                    <li className={styles.socialListItem} key={link.name}>
                      <a
                        className={styles.socialLink}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <svg
                          className={cx(
                            styles.socialLinkIcon,
                            styles[theme.colors.iconFill],
                          )}
                          width="20"
                          height="20"
                        >
                          <use href={sprite + `${link.icon}`}></use>
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contacts;
