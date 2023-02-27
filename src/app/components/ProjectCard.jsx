'use client'
import React from 'react'
import { useIntersectionObserver } from '../hooks/intersection-observer.ts';
import styles from "../css/Projects.module.css";

export default function ProjectCard({ link, icon, title, description }) {

    const onObserveAnimate = () => {
        let element = ref.current;
        element.classList.add(styles.project_animation)

    }

    const ref = useIntersectionObserver(onObserveAnimate);

  return (
    <a 
    ref={ref} 
    id="project_card" 
    href={link} 
    target="_blank" 
    rel='noreferrer' 
    className={styles.project_card}
    >
        <div 
        className={styles.project_icon} 
        >
            {icon}
        </div>
        <h3 className='h3'>{title}</h3>
        <p className='p'>
            {description}
        </p>
    </a>
  )
}
