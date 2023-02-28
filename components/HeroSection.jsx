'use client'
import React, { useEffect } from 'react'
import Lottie from "lottie-react-web"
import animation from "../public/blocks_animation.json"
import Typed from 'react-typed';
import styles from "../css/HeroSection.module.css"

export default function HeroSection() {
  return (
    <div className={`${styles.hero_section} section`}>
        <div className='container_default'>
            <div className={styles.left_text}>
                <h1 className={styles.hero_h}>
                    I'M<br/>
                    <Typed
                    strings={['VALTTERI', 'A PROGRAMMER']}
                    typeSpeed={50}
                    loop
                />
                </h1>
                <div className={styles.hero_p_container}>
                    <p className={styles.hero_p}>
                        Honestly I'm not sure what I'm focused on, so many cool things to build
                    </p>
                </div>
            </div>
        </div>
        <div className={styles.hero_animation_container}>
            <div className={styles.hero_animation_wrapper}>
                <Lottie 
                options={{
                    animationData: animation
                }}  
                />
            </div>
        </div>
    </div>
  )
}
