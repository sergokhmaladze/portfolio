'use client';
import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar():  React.JSX.Element {
    return(
        <nav className={styles.navbarContainer}>
            <ul className={styles.navbarList}>
                <li><Link className={styles.navbarItems} href='/'>Home</Link></li>
                <li><Link className={styles.navbarItems} href='/sidebar/about'>About</Link></li>
                <li><Link className={styles.navbarItems} href='/sidebar/contact'>Contact</Link> </li>
            </ul>

        </nav>

        
    )
}