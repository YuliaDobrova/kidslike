import React, { useContext } from 'react';
import AwardsTitle from '../../components/awards/awardsTitle/AwardsTitle';
import AwardsList from '../../components/awards/awardsList/AwardsList';
import ProgressBar from '../../components/progressBar/ProgressBar';
import useWindowDimensions from '../../pages/planning/hooks/widthHook';
import styles from './AwardsPage.module.css';
import Footer from '../../components/footer/Footer';
import { ThemeContext } from '../../App';

export default function AwardsPage() {
  const { width } = useWindowDimensions();
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles[theme.colors.background]}>
      {width > 579 && (
        <div className="container">
          <div className={styles.AwardsTitleWrapper}>
            <AwardsTitle />
            <ProgressBar />
          </div>
          <AwardsList />
          <Footer />
        </div>
      )}
      {width < 580 && (
        <div className="container">
          <AwardsTitle />
          <AwardsList />
          <Footer />
          <ProgressBar />
        </div>
      )}
    </div>
  );
}
