import styles from "./Nav.module.scss";

export const Nav = () => {
    return(
        <nav className={styles.nav_container}>
            <ul>
                <li>Home</li>
                <li>To Do</li>
            </ul>
        </nav>
    );
}