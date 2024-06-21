import styles from './Footer.module.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa";
import { FaFigma} from "react-icons/fa";


export default function Footer(){
    return(
        <div className={styles.mainDiv}>
            <div className={styles.info}>
                <h3>Meu contato:</h3>
                <p>(24) 99298-6163</p>
            </div>
            <div>
                <h3>Email:</h3>
                <p>davimarinho01@outlook.com.br</p>
            </div>
            <div className={styles.links}>
                <a href='https://github.com/davimarinho01' className={styles.icons}><FaGithub size={30}/></a>
                <a href='https://www.linkedin.com/in/davi-marinho-9896b9179/' className={styles.icons}><FaLinkedin size={30}/></a>
                <a href='https://www.figma.com/design/O2j7uVVhXUnV6dadZc2MMw/Desafio-03%3A-Desenvolva-um-portf%C3%B3lio-com-React-hooks?node-id=1-190&t=h7npbIMn39KPgSUu-0' className={styles.icons}><FaFigma size={30}/></a>
            </div>
        </div>
    )
    
}