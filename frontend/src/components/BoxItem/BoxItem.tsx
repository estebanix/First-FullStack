import { useState } from "react";
import styles from "./BoxItem.module.scss";

interface BoxItemProps {
  act: {
    id: number;
    activity: string;
    description: string;
  };
}

export const BoxItem: React.FC<BoxItemProps> = ({ act }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`${styles.boxItem_container} ${isActive ? styles.active : ""}`}
      onClick={() => handleClick()}
    >
      <h3>{act.activity}</h3>
      <p>{act.description}</p>
    </div>
  );
};
