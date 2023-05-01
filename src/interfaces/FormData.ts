import { Category } from './Category';

export interface FormData {
  question: string;
  user?: string;
  category: Category;
}
