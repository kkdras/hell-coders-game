import { ITopic, IComment, IReply } from '../../store/forum/types'

export const replyes: IReply[] = [
  {
    id: '6',
    commentId: '4',
    text: 'В советском союзе тетриса не было!',
    authorLogin: 'Kostya',
    time: '02.05.2023 13:00',
  },
  {
    id: '7',
    commentId: '4',
    text: 'Ты просто не знаешь, кто его создал',
    authorLogin: 'Dima',
    time: '02.05.2023 14:00',
  },
  {
    id: '8',
    commentId: '4',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu',
    authorLogin: 'Tanya',
    time: '02.05.2023 15:00',
  },
  {
    id: '9',
    commentId: '4',
    text: 'Я не умею играть',
    authorLogin: 'Olya',
    time: '02.05.2023 15:00',
  },
]

export const comments: IComment[] = [
  {
    id: '4',
    topicId: '1',
    title: 'Советский тетрис',
  },
  {
    id: '5',
    topicId: '1',
    title: 'Японский тетрис',
  },
  {
    id: '6',
    topicId: '1',
    title: 'Древнеегипетский тетрис'
  }
]


export const topics: ITopic[] = [
  {
    id: '1',
    title: 'Тетрисы мира',

  },
  {
    id: '2',
    title: 'Технологии',

  },
  {
    id: '3',
    title: 'Флудилка',
  }

]



