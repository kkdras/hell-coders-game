import { Component } from 'react'
import Error from '../components/error'
import Image from "../assets/404.png";

export class Error404 extends Component {

    componentDidMount() {
        document.title = "Ошибка 404 - Страница не найдена";
    }
    
    render() {

        return (
            <Error 
                title='Ошибка 404!'
                text='К сожалению, запрашиваемая страница не найдена.' 
                img={Image} 
            />
        );
    }
}
