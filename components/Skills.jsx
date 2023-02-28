'use client'
import React from 'react'
import styles from "../css/Skills.module.css"
import { FaAngular, FaGit, FaRust, FaReact, FaAws, FaGoogle, FaDatabase } from "react-icons/fa"
import { SiGoland, SiPostgresql } from "react-icons/si"
import SkillCard from './SkillCard'

export default function Skills() {
    const skills_list = [
        {
            skill: "React",
            icon: <FaReact size="25" />
        },
        {
            skill: "Angular",
            icon: <FaAngular size="25" />
        },
        {
            skill: "Go",
            icon: <SiGoland size="25" />
        },
        {
            skill: "Rust",
            icon: <FaRust size="25" />
        },
        {
            skill: "Git",
            icon: <FaGit size="25" />
        },
        {
            skill: "AWS",
            icon: <FaAws size="25" />
        },
        {
            skill: "GCP",
            icon: <FaGoogle size="25" />
        },
        {
            skill: "SQL",
            icon: <FaDatabase size="25" />
        },
        {
            skill: "Postgres",
            icon: <SiPostgresql size="25" />
        },
    ]

  return (
    <div className={`section ${styles.skills_section}`}>
        <div className='container_default' id="container_skills">
            <div className='text_center'>
                <h2 className="h2" id='skills_header' style={{marginBottom: 0}}>Skills and tools</h2>
            </div>
            <div className='container_small'>
                <div className={styles.skills_grid}>
                    {skills_list.map((o, i) =>
                        <SkillCard key={i} icon={o.icon} skill={o.skill} />
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}