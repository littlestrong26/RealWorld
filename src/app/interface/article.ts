export interface Article {
  id: number;
  name: string;
  date: string;
  img: string;
  heart: number;
  title: string;
  subtitle: string;
  detail: string;
  memberid: number;
  tag: string;
}

export class ArticleModel implements Article {
  id: number;
  name: string;
  date: string;
  img: string;
  heart: number;
  title: string;
  subtitle: string;
  detail: string;
  memberid: number;
  tag: string;
}
