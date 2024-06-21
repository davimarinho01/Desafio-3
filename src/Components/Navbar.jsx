import styles from './Navbar.module.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa";


export default function Navbar(){
    return(
        <div className={styles.nav}>
            <ul className={styles.sections}>
                <a><li>Projetos</li></a>
                <a><li>Tecnologias</li></a>
                <a><li>Sobre mim</li></a>
            </ul>
            <div>
                <ul className={styles.icons}>
                    <a href='https://github.com/davimarinho01'><li><FaGithub size={30}/></li></a>
                    <a href='https://www.linkedin.com/in/davi-marinho-9896b9179/'><li><FaLinkedin size={30}/></li></a>
                </ul>
            </div>
        </div>
    )
}
