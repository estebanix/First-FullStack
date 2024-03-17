import { Link } from "react-router-dom";

import styles from "./Nav.module.scss";

export const Nav = () => {
    return(
        <nav className={styles.nav_container}>
            <ul className={styles.nav_ul}>
                <Link to={"/"}><li>Home</li></Link>
                <Link to={"/todo"}><li>To Do</li></Link>
            </ul>
        </nav>
    );
}