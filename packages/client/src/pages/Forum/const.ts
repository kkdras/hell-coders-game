import { IForum, IMessage, ITheme } from './types'

export const forums: IForum[] = [
  {
    id: 1,
    title: 'Тетрисы мира',
    themesCount: 222,
    answersCount: 1222,
  },
  {
    id: 2,
    title: 'Технологии',
    themesCount: 2,
    answersCount: 12,
  },
  {
    id: 3,
    title: 'Флудилка',
    themesCount: 222,
    answersCount: 1222,
  },
]

export const themes: ITheme[] = [
  {
    id: 4,
    forumId: 1,
    title: 'Советский тетрис',
    answersCount: 45,
    lastAnswer: '02.05.2023',
  },
  {
    id: 5,
    forumId: 1,
    title: 'Японский тетрис',
    answersCount: 4,
    lastAnswer: '03.05.2023',
  },
  {
    id: 6,
    forumId: 1,
    title: 'Древнеегипетский тетрис',
    answersCount: 100,
    lastAnswer: '23.12.2022',
  },
]

export const messages: IMessage[] = [
  {
    id: 6,
    themeId: 4,
    text: 'В советском союзе тетриса не было!',
    author: 'Эксперт',
    time: '02.05.2023 13:00',
  },
  {
    id: 7,
    themeId: 4,
    text: 'Ты просто не знаешь, кто его создал',
    author: 'Волшебник',
    time: '02.05.2023 14:00',
  },
  {
    id: 8,
    themeId: 4,
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu',
    author: 'Прохожий',
    time: '02.05.2023 15:00',
  },
]
