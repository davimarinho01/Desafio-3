import styles from './About.module.css'
import Timeline from './elements/Timeline'

export default function About(){
    return(
        <div className={styles.about}>
            <h1>Sobre mim</h1>
            <Timeline />
            
            
        </div>
    )
}