'use client'
import React from 'react'
import styles from "../css/Skills.module.css"
import { useIntersectionObserver } from "../hooks/intersection-observer.ts"

export default function SkillCard({ icon, skill }) {

    const onObserveAnimate = () => {
        let element = ref.current;
        element.classList.add(styles.skills_animation)
    }

    const ref = useIntersectionObserver(onObserveAnimate);

  return (
    <div ref={ref} className={styles.skill_card}>
        <div className={styles.skill_icon}>
            {icon}
        </div>
        <p className={styles.skill_text}>{skill}</p>
    </div>
  )
}
