import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { patchActiveTask } from "../../../redux/tasks/tasksOperation";
import PlanningCardItem from "../planningCardItem/PlanningCardItem";
import defaultImg from "../image/calendar.webp";
import styles from "./PlanningCards.module.css";

const PlanningCards = ({ tasks }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onAddActiveTask = useCallback(
    (taskId, dataObj) => {
      dispatch(patchActiveTask(taskId, dataObj));
    },
    [dispatch]
  );

  return (
    <div className={styles.cartContainer}>
      {tasks.length > 0 ? (
        <ul className={styles.cardList}>
          {tasks.map((task) => (
            <PlanningCardItem
              onAddActiveTask={onAddActiveTask}
              task={task}
              key={task._id}
            />
          ))}
        </ul>
      ) : (
        <>
          <h2 className={styles.createListHabits}>
            {t("Create your own habit list")}
          </h2>
        </>
      )}
    </div>
  );
};

export default PlanningCards;

PlanningCards.defaultProps = {
  imageUrl: defaultImg,
};
