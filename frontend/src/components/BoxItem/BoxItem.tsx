import { useState } from "react";
import styles from "./BoxItem.module.scss";

interface BoxItemProps {
  act: {
    id: number;
    activity: string;
    description: string;
  };
  onDelete: (id: number) => void;
}

export const BoxItem: React.FC<BoxItemProps> = ({ act, onDelete }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const deleteItem = (id) => {
    onDelete(id);
  };

  return (
    <div
      className={`${styles.boxItem_container} ${isActive ? styles.active : ""}`}
      onClick={() => handleClick()}
    >
      <h3>{act.activity}</h3>
      <p>{act.description}</p>
      <button className={styles.deleteBtn} onClick={() => deleteItem(act.id)}>
        X
      </button>
    </div>
  );
};
