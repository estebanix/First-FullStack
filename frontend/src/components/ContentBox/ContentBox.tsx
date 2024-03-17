import styles from "./ContextBox.module.scss";

interface ContextBoxProps {
    children: React.ReactNode;
}

export const ContextBox: React.FC<ContextBoxProps> = ({children}) => {
    return (
        <div className={styles.contentBox_container}>
            {children}
        </div>
    )
}