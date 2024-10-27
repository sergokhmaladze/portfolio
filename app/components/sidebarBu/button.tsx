'use client';
import React from "react";
import styles from "./button.module.css"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "../navbar/navbar";



const ButtonForSidebar: React.FC = () =>{

    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    const toggleMenu = (): void => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = (): void => {
      setIsOpen(false);
    };
    
    
    return (
      
    <div className={styles.sidebar}>
       
       
      
      <div className={styles.menuIcon} onClick={toggleMenu}>
        

        {isOpen ? (
            <span className={styles.closeIcon}>✖</span>
        ) : (
            <span className={styles.hamburgerIcon}>☰</span>
        )}
        
      </div>

      
      
      
      <div className={styles.logo}>
        <Link href="/">
          <Image 
          onClick={closeDropdown}
          className={styles.logoImage}
          src="/me.jpg"
          alt="My logo" 
          width={40}      
          height={40}
          />
          
        </Link> 
        
        
       </div>
       
       <Link className={styles.myName} href="/" onClick={closeDropdown}>Sergo Khmaladze</Link>

       <Navbar></Navbar>
       
      
      
      <div className={`${styles.navMenu} ${isOpen ? styles.showMenu : ''}`}>
        <Link className={styles.home} onClick={closeDropdown} href='/'>Home</Link>
        <Link className={styles.about} onClick={closeDropdown} href='/sidebar/about'>About</Link>
        <Link className={styles.contact} onClick={closeDropdown} href='/sidebar/contact'>Contact</Link>
      </div>
      
    </div>
    

);
}

export default ButtonForSidebar;





