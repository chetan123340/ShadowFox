import React from 'react'
import skills from "../../data/skills.json"
import history from "../../data/history.json"
import { getImageUrl } from '../../utils'
import styles from "../Experience/Experience.module.css"

function Experience() {
  return (
    <section id='experience' className={styles.container}>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                {skills.map((skill, id)=>(
                    <div key={id} className={styles.skill}>
                        <img src={getImageUrl(skill.imageSrc)} alt={skill} className={styles.skillImageContainer} />
                        <p>{skill.title}</p>
                    </div>
                ))}
            </div>
            <ul className={styles.history}>
                {history.map((historyItem, id)=>(
                    <li key={id} className={styles.historyItem}>
                         <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} Logo`} />
                         <div className={styles.historyItemDetails}>
                            <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                            <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                            <ul>
                                {historyItem.experiences.map((experience, id)=>(
                                    <li key={id}>{experience}</li>
                                ))}
                            </ul>
                         </div>
                    </li>
                ))}
            </ul>
        </div>
    </section>
  )
}

export default Experience