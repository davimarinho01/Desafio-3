import styles from './Projects.module.css';
import Cards from './elements/Cards';
import serralves from '../image/serralves.svg';
import Costs from '../image/Costs.svg';
import dnc from '../image/lpdnc.svg';
import Gerador from '../image/Gerador.svg';

export default function Projects(){
    return(
        <div className={styles.projects}>
            <h1>Projetos</h1>
            <div className={styles.cards}>
                <Cards
                    image={serralves}
                    title="Serralves Stúdios"
                    description = "Desenvolvimento de uma Landing Page para a divulgação dos stúdios da empresa"
                    link='https://github.com/davimarinho01/Serralves'
                />
                <Cards
                    image={Costs}
                    title="Sistema de Gerenciamento"
                    description ="Desenvolvimento de um sistema para gerenciamento de financeiro de projetos (EM ANDAMENTO, SITE INDISPONÍVEL)"
                    link='https://github.com/davimarinho01/Cost'
                />
                <Cards
                    image={dnc}
                    title="Landing Page"
                    description ="Desenvolvimento de uma Landing page para o anúncio da Formação de Tecnologia da Escola DNC"
                    link='https://github.com/davimarinho01/projeto-landing-page'
                />
                <Cards 
                    image={Gerador}
                    title="Gerador de Senha"
                    description ="Desenvolvimento de um Gerador de senhas online com verificação de nível se segurança"
                    link='https://github.com/davimarinho01/Password-Generator'
                />
            </div>
        </div>
    )
}