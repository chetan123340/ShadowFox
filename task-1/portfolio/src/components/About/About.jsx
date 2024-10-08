import React from 'react'
import cursorIcon from "../../../assets/about/cursorIcon.png"
import serverIcon from "../../../assets/about/serverIcon.png"
import styles from "../About/About.module.css"

function About() {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={cursorIcon} alt="cursorIcon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a frontend developer experienced in building responsive and optimized sites</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={serverIcon} alt="serverIcon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I'm have experience in building fast and optimized backends and APIs </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About