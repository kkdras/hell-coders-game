import { Component } from 'react'
import Error from '../components/error'
import Image from "../../public/500.png";

export class Error500 extends Component {

  componentDidMount() {
    document.title = "Ошибка сервера 500";
  }

  render() {
    return (
        <Error 
            title='Ошибка сервера!'
            text='Мы уже бросили все свои дела и стремительно ремонтируем...' 
            img={Image}
        />
    );
  }
}
