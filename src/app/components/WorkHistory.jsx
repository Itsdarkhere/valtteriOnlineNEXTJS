'use client'
import React from "react";
import styles from "../css/WorkHistory.module.css";
import { useIntersectionObserver } from "../hooks/intersection-observer.ts";

export default function WorkHistory() {

    const onObserveAnimateOne = () => {
        document.getElementById("wh_card_one").classList.add(styles.wh_animation);
    }

    const onObserveAnimateTwo = () => {
        document.getElementById("wh_card_two").classList.add(styles.wh_animation);
    }

    const onObserveAnimateThree = () => {
      document.getElementById("wh_card_three").classList.add(styles.wh_animation);
  }

    const ref1 = useIntersectionObserver(onObserveAnimateOne);
    const ref2 = useIntersectionObserver(onObserveAnimateTwo);
    const ref3 = useIntersectionObserver(onObserveAnimateThree);

  return (
    <div className='section section_large_padding'>
      <div className='container_small'>
        <h2 className='h2' style={{ marginBottom: "40px" }}>
          Work Experience
        </h2>
        <div ref={ref1} className={`${styles.wh_card} ${styles.wh_card_top}`} id="wh_card_one">
          <img
            className={styles.wh_card_img}
            src='https://ik.imagekit.io/s93qwyistj0/valtteriOnline/bt_YSW158KmI.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671246688261'
            alt='blocktickets logo'
          />
          <div>
            <h2 className='h2'>Full-stack Developer</h2>
            <p className={styles.wh_card_description}>
            As a Contractor at Blocktickets, I was responsible for building a React Native application from the ground up. This included implementing features and functionality, and ensuring the app is user-friendly and intuitive.
            <br/>
            <br/>
            In addition to my work on the React Native app, Im also performing other full stack JavaScript development tasks. This includes working with Node.js and React to create scalable and robust front and back-end systems.
            </p>    
          </div>
        </div>
        <div ref={ref2} className={`${styles.wh_card} ${styles.wh_card_top}`} id="wh_card_two">
          <img
            className={styles.wh_card_img}
            src='https://ik.imagekit.io/s93qwyistj0/valtteriOnline/new_logo_transp__4__P2iO86ho0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663900682184'
            alt='supernovas logo'
          />
          <div>
            <h2 className='h2'>CTO</h2>
            <p className={styles.wh_card_description}>
            As the CTO of Supernovas, I was responsible for mentoring and leading a team of developers in building innovative new features and services. I played a role in choosing the tech stack for the company, ensuring that it was scalable, reliable, and effective in meeting our needs.
            <br/>
            <br/>
            Overall, my experience as CTO at a Supernovas has allowed me to develop a strong understanding of the unique challenges and opportunities that come with building and scaling a tech-driven business.
            </p>    
          </div>
        </div>
        <div ref={ref3} className={styles.wh_card} id="wh_card_three">
          <img
            className={styles.wh_card_img}
            src='https://ik.imagekit.io/s93qwyistj0/valtteriOnline/new_logo_transp__4__P2iO86ho0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663900682184'
            alt='supernovas logo'
          />
          <div>
            <h2 className='h2'>Full-stack Developer</h2>
            <p className={styles.wh_card_description}>
              As a programmer for Supernovas, I developed the existing platform to a point where the team secured a $200k investment. As a result of my efforts, I was promoted to a leadership role within the team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
