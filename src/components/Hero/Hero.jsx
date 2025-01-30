import React from 'react'
import styles from './Hero.module.css'; 

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Dhruv</h1>
            <p className={styles.description}>
                B.S Computer Engineering, Minor C.S                
            </p>
            <a 
                className={styles.btnOne} 
                href="mailto:dhruvnup@gmail.com"
            >
                <span>Contact Me</span>
            </a>
        </div>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur}/>
    </section>
  )
}

export default Hero