import React from "react";
import Link from 'next/link';
import styles from "../styles/navbar.module.css";

//nav bar implemented link so you can travel across different pages of the website
function Navbar()
{

    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li> <Link href="/"> Home  </Link></li>
                <li> <Link href="/review"> Review </Link></li>
            </ul>
        </nav>
    )
}



export default Navbar