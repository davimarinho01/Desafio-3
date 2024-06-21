import styles from './Presentation.module.css'
import {useState, useEffect} from 'react'
import Button from './elements/Button';


export default function Presentation (){
    const [text, setText] = useState(''); 
    const toRotate =['Olá, eu sou Davi Marinho!'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 70;
    const [delta, setDelta] = useState(70);

    useEffect(() => {
        let ticker = setInterval(() => {
            toType()
        }, delta)
        return () => clearInterval(ticker);
    })

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText)

        if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }


    return (
        <div className={styles.presentation}>
            <h1>{text}</h1>
            <p>
                Sou um apaixonado por tecnologia e soluções inovadoras. Como<br/> 
                Desenvolvedor Front-End, eu tenho o compromisso de desenvolver a<br/> 
                melhor experiência para os usuários, criando interfaces intuitivas e<br/>
                trazer resultados excepcionais para os negócios. 
            </p>
            <Button text="Saber mais" />
        </div>
    )
}