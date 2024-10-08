import React, { useState } from 'react'
import styles from "../Navbar/Navbar.module.css" 
import menuIcon from "../../../assets/nav/menuIcon.png"
import closeIcon from "../../../assets/nav/closeIcon.png"
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)  
  
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>Portfolio</a>
      <div className={styles.menu}>
        <img src={menuOpen ? closeIcon : menuIcon} className={styles.menuBtn} alt="menu-btn" onClick={()=>{setMenuOpen(c => !c)}} />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={()=>setMenuOpen(false)}>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar