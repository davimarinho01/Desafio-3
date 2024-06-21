import { useEffect, useState } from 'react'
import styles from './Timeline.module.css'

export default function Timeline(){
    
    const [hover, setHover] = useState(false);

    useEffect(() => {
        if(hover) {
            const mainText = document.querySelector(`.${styles.mainText}`);
            const subText = document.querySelector(`.${styles.subText}`);
            mainText.style.display = 'flex'
            subText.style.display = 'flex'
        }
    }, [hover]);

    const handleMouseOver = () =>{
        setHover(true);
    };

    return(
        <div onMouseOver ={handleMouseOver} className={styles.mainDiv}>

            <div className={styles.mainText}>
                <p>2022</p>
                <p>2023</p>
                <p>2024</p>
            </div>

            <div className={styles.mainBar}>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
            </div>

            <div className={styles.subText}>
                <p>
                    Em 2022, ingressei na faculdade  de <br/>
                    Engenharia da Computação e desde <br/>
                    o começo a área de desenvolvimento me <br/>
                    chamou a atenção.
                </p>
                <p>
                    Em 2023, buscando me aprimorar ainda mais <br/>
                    ingressei na faculdade de Análise e <br/>
                    Desenvolvimento de Sistemas e também <br/>
                    no curso de Desenvolvedor Full Stack.
                    
                </p>
                <p>
                    Atualmente, atuo na área desenvolvimento front-end <br/>
                    onde desenvolvo projetos pessoais e empresariais<br/>
                    com designs modernos e responsivos<br/>
                    visando a melhor experiência do usuário.
                </p>
                
            </div>
        </div>
    )
}