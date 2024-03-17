import styles from "./Nav.module.scss";

export const Nav = () => {
    return(
        <nav className={styles.nav_container}>
            <ul className={styles.nav_ul}>
                <li>Home</li>
                <li>To Do</li>
            </ul>
        </nav>
    );
}