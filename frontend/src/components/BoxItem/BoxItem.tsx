import styles from "./BoxItem.module.scss";

interface BoxItemProps {
  act: {
    id: number;
    activity: string;
    description: string;
  };
}

export const BoxItem: React.FC<BoxItemProps> = ({ act }) => {
  return (
    <div className={styles.boxItem_container}>
      <h3>{act.activity}</h3>
      <p>{act.description}</p>
    </div>
  );
};