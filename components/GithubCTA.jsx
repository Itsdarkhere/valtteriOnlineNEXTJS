'use client'
import React from 'react'
import styles from "../css/GithubCTA.module.css"
import { FaGithub } from "react-icons/fa"
import { useIntersectionObserver } from '../hooks/intersection-observer'

export default function GithubCTA() {

    const onObserveAnimate = () => {
        document.getElementById("gh_cta_grid").classList.add(styles.gh_cta_animation);
    }

    const ref = useIntersectionObserver(onObserveAnimate);

  return (
    <div className='section'>
        <div className='container_default'>
            <div className={styles.gh_cta}>
                <div className={styles.gh_cta_grid} id="gh_cta_grid">
                    <div ref={ref} className={styles.gh_text_container}>
                        <h2 className='h2'>Still not impressed?</h2>
                        <p className='p'>Check out my github, it contains all of my projects!</p>
                    </div>
                    <div className={styles.gh_cta_grid_right}>
                        <a href="https://github.com/Itsdarkhere" target="_blank" rel="noreferrer" className='basic_button'>
                            <FaGithub style={{marginRight: "10"}} size="20" />    
                            Open Github
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
