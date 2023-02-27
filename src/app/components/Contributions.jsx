import React from 'react'
import styles from "../css/Contributions.css"

export default function Contributions() {
  return (
    <div style={{display: 'flex', marginLeft: 'auto', marginRight: 'auto', flexDirection: 'row', flexWrap: 'wrap', padding: '24px', maxWidth: '1220px'}}>
        {Array.apply(null, Array(365)).map((i) => {
            return <div key={i} className={styles.contribution-box}></div>
        })}
    </div>
  )
}
