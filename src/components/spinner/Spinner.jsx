import Loader from "react-loader-spinner";
import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.loaderContainer}>
      <Loader
        type="ThreeDots"
        color="#FFBC33"
        height={100}
        width={100}
        // timeout={2000}
      />
    </div>
  );
};

export default Spinner;
