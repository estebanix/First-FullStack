import React, { useEffect, useState } from "react";
import { BoxItem } from "../BoxItem";

import styles from "./ToDoBox.module.scss";
import data from "./testData.json";

export const ToDoBox: React.FC = () => {
  const [activities, setActivities] = useState(data);

  useEffect(() => {
    setActivities(data);
  }, []);

  return (
    <div className={styles.toDoBox_container}>
      {activities.map((item) => (
        <BoxItem key={item.id} act={item} />
      ))}
    </div>
  );
};
