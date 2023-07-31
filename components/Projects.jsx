'use client'
import React from 'react'
import styles from "../css/Projects.module.css"
import { FaCode, FaRust, FaReact, } from "react-icons/fa"
import ProjectCard from './ProjectCard'

export default function Projects() {
    const recent_projects = [
        {
            title: "Blocktickets CheckIn App",
            description: "App for checking users in to events, available only in the US.",
            link: "https://apps.apple.com/us/app/BlockticketsCheckIn/iddcc0f3a9-8e2c-42ae-a983-30cf765f75ad",
            icon: <FaReact color='black' size="40" />,
        },
        {
            title: "StagingAI",
            description: "Fully featured webapp for stable diffusion inpainting. ",
            link: "https://github.com/Itsdarkhere/StagingAI",
            icon: <FaReact color='black' size="40" />
        },
        {
            title: "ProxyAI",
            description: "Charles proxy copycat in React Native, ongoing project.",
            link: "https://github.com/Itsdarkhere/ProxyAI",
            icon: <FaReact color='black' size="40" />
        },
        {
            title: "This website",
            description: "Source for this website",
            link: "https://github.com/Itsdarkhere/valtteri.online",
            icon: <FaCode color='black' size="40" />,
        },
        {
            title: "Rust backend",
            description: "Small Rust backend for a React Native app",
            link: "https://github.com/Itsdarkhere/Taxiapp_backend_rust",
            icon: <FaRust color='black' size="40" />

        },
        {
            title: "Sepos website",
            description: "Website for a friends company, design sucks since I made it",
            link: "https://github.com/Itsdarkhere/Sepos-Website",
            icon: <FaReact color='black' size="40" />
        },
    ]

  return (
    <div className={`section ${styles.section_projects}`}>
        <div className='container_default'>
            <h2 className='h2' id="projects_header">Recent Programming Projects</h2>
            <div className={styles.projects_grid}>
                {recent_projects.map((o, i) => 
                    <ProjectCard 
                        key={i}
                        link={o.link} 
                        icon={o.icon}
                        title={o.title} 
                        description={o.description} 
                    />
                )}
            </div>
        </div>
    </div>
  )
}
