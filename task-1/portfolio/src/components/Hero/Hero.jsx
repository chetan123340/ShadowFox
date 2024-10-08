import React from 'react'
import heroImage from "../../../assets/hero/heroImage.jpg"
import styles  from "../Hero/Hero.module.css"

function Hero() {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi! I'm Chetan K P</h1>
            <p className={styles.description}>I'm a full stack developer. Connect to know more</p>
            <a href="mailto:chetan2003kp@gmail.com" className={styles.contactBtn}>Contact Me!</a>
        </div>
        <img src={heroImage} alt="Hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero