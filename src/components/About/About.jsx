import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'

const about = () => {
    
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={StyleSheet.content}>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img
                    className={styles.aboutImage}
                    src={getImageUrl("about/server1.png")}
                    alt = "Computer"
            > </img>
            <div className={styles.aboutItemText}>
                <h3>Computer Engineer</h3>
                <p>I am a current 3rd year student at UIC and I am pursuing a B.S
                    in Computer Engineering with a minor in Computer Science. 
                </p>
            </div>
            </li>
        </ul>
        </div>
    </section>
  )
}

export default about
