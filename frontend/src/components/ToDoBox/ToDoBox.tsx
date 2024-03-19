import { useEffect, useState } from "react";
import styles from "./ToDoBox.module.scss";
import data from "./testData.json";

export interface Activity {
  id: number;
  activity: string;
  description: string;
}

export const ToDoBox: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    setActivities(data);
  }, []);

  return (
    <div className={styles.toDoBox_container}>
      {activities.map((item) => (
        <p key={item.id}>{item.activity}</p>
      ))}
    </div>
  );
};
