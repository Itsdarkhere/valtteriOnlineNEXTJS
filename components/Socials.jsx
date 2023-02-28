'use client'
import React from 'react'
import styles from "../css/Socials.module.css"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { useIntersectionObserver } from '../hooks/intersection-observer.ts'

export default function Socials() {

    const onObserveAnimate = () => {
        document.getElementById("socials_header").classList.add(styles.socials_animations);
    }

    const ref = useIntersectionObserver(onObserveAnimate);

  return (
    <div className='section'>
        <div className='container_medium'>
            <div className={styles.socials_cta}>
                <div className={styles.socials_heading_box}>
                    <h2 ref={ref} className='h2 opacity_0' id="socials_header">My Socials</h2>
                </div>
                <div className={styles.socials_buttons_grid}>
                    <div className={styles.social_cta_button}>
                        <a className='basic_button' href="https://github.com/Itsdarkhere" target="_blank" rel="noreferrer">
                            <FaGithub style={{marginRight: "10"}} />  
                            Github
                        </a>
                    </div>
                    <div className={styles.social_cta_button}>
                        <a className='main_button w_button' href="https://www.linkedin.com/in/valtteri-juvonen-50453516a" target="_blank" rel="noreferrer">
                            <FaLinkedin style={{marginRight: "10"}} />    
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
