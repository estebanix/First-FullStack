import React, { useEffect, useState } from "react";
import { BoxItem } from "../BoxItem";

import styles from "./ToDoBox.module.scss";
import data from "./testData.json";

export const ToDoBox: React.FC = () => {
  const [activities, setActivities] = useState(data);

  useEffect(() => {
    setActivities(data);
  }, []);

  const handleDelete = (id: number) => {
    setActivities(activities.filter(item => item.id !== id));
  };

  return (
    <div className={styles.toDoBox_container}>
      {activities.map((item) => (
        <BoxItem key={item.id} act={item} onDelete={handleDelete} />
      ))}
    </div>
  );
};
