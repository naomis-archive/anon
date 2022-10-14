export type Category =
  | 'question'
  | 'confession'
  | 'flirt'
  | 'compliment'
  | 'never';

export interface FormData {
  question: string;
  user?: string;
  category: Category;
}
