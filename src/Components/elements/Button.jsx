import styles from './Button.module.css';

export default function Button({text, link}){
    return (
        <div>
            <a href={link}><button className={styles.btn}>{text}</button></a>
        </div>
    )
}