import React from "react";
import { ReactComponent as CheckIcon } from "../cardsIcons/taskTogle_check.svg";
import { ReactComponent as AttentionIcon } from "../cardsIcons/taskTogle_attention.svg";
import s from "./TaskState.module.css";

const taskState = ({ taskState }) => {
  return taskState ? (
    <div className={s.checkIconWrap}>
      <CheckIcon className={s.checkIcon} width="15" height="15" />
    </div>
  ) : (
    <div className={s.attentionIconWrap}>
      <AttentionIcon className={s.attentionIcon} width="15" height="15" />
    </div>
  );
};

export default taskState;
