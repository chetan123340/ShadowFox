import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "../Contact/Contact.module.css"

function Contact() {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="email icon" />
                <a href="mailto:chetan2003kp@gmail.com">chetan2003kp@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin icon" />
                <a href="https://www.linkedin.com/in/chetankp">linkedin.com/chetan-k-p</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="github icon" />
                <a href="https://www.github.com/chetan123340">github.com/chetan</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact