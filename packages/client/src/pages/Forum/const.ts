import { ITopic, IComment, IReply } from '../../store/forum/types'

export const replyes: IReply[] = [
  {
    id: 6,
    commentId: 4,
    text: 'В советском союзе тетриса не было!',
    authorId: 1686282386,
    time: '02.05.2023 13:00',
  },
  {
    id: 7,
    commentId: 4,
    text: 'Ты просто не знаешь, кто его создал',
    authorId: 1686282387,
    time: '02.05.2023 14:00',
  },
  {
    id: 8,
    commentId: 4,
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu',
    authorId: 1686282381,
    time: '02.05.2023 15:00',
  },
]

export const comments: IComment[] = [
  {
    id: 4,
    topicId: 1,
    title: 'Советский тетрис',
    replyes: replyes,
  },
  {
    id: 5,
    topicId: 1,
    title: 'Японский тетрис',
    replyes: replyes,
  },
  {
    id: 6,
    topicId: 1,
    title: 'Древнеегипетский тетрис',
    replyes: replyes,
  },
]


export const topics: ITopic[] = [
  {
    id: 1,
    title: 'Тетрисы мира',
    comments: comments,
  },
  {
    id: 2,
    title: 'Технологии',
    comments: comments,
  },
  {
    id: 3,
    title: 'Флудилка',
    comments: comments,
  },
]



