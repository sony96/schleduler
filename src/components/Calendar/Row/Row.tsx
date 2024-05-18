import React, { useState } from "react";
import type { RowProps } from "./Row.types";
import styles from "./Row.module.scss";
import { MODE } from "./Row.constatnts";
import { format } from "date-fns";
import deleteIcon from "../../../assets/circle-xmark-regular.svg";
import clsx from "clsx";

const Row: React.FC<RowProps> = ({
  mode = MODE.DISPLAY,
  time,
  id,
  onAddTime,
  onDeleteTime,
}) => {
  const [showDelete, setShowDelete] = useState(true);

  return (
    <>
      {mode === MODE.ADD && (
        <button
          className={clsx(styles.row, styles["row--add"])}
          onClick={onAddTime}
        >
          <span>Add Time</span>
        </button>
      )}

      {mode === MODE.DISPLAY && (
        <div
          className={clsx(styles.row, styles["row-display"])}
          onMouseEnter={() => setShowDelete(true)}
          onMouseLeave={() => setShowDelete(false)}
        >
          <span>{format(time || "", "HH:mm")}</span>
          {showDelete && (
            <img
              src={deleteIcon}
              alt="delete"
              className={styles.deleteIcon}
              onClick={() => !!onDeleteTime && onDeleteTime(id || "")}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Row;
