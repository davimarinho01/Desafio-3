import styles from './Cards.module.css';
import Button from './Button';

export default function Cards({image, title, description, link}){
    return(
        <div className={styles.card}>
            <img src={image}/>
            <section>
                <h3>{title}</h3>
                <p>{description}</p>
            </section>
            <div className={styles.btn}>
                <Button link={link} text = "Clique aqui"/>
            </div>   
        </div>
    )
}