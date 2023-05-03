export interface IMessage {
  id: number;
  themeId: number;
  text?: string;
  author: string;
  time: string;
}

export interface ITheme {
  id: number;
  forumId: number;
  title?: string;
  answersCount?: number;
  lastAnswer?: string;
}

export interface IForum {
  id: number;
  title?: string;
  themesCount: number;
  answersCount: number;
}
