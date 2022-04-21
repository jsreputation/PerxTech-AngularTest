import { Book } from './book';

export interface Response {
  data: Book[];
  links: {
    first: string;
    last: string;
  }
}
