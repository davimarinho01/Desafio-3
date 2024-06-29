import styles from './Skills.module.css'
import git from '../image/skills/git.png'
import js from '../image/skills/javascript.svg'
import html from '../image/skills/html.svg'
import css from '../image/skills/css.svg'
import react from '../image/skills/react.svg'


export default function Skills(){
    return(
        <div className={styles.skill}>
            <h1>Habilidades</h1>
            <div className={styles.skillContent}>
                <img src={html} alt='html'/>
                <img src={css} alt='css'/>
                <img src={js} alt='javascript'/>
                <img src={react} alt='react'/>
                <img src={git} alt='git'/>
            </div>
        </div>
    )
}

