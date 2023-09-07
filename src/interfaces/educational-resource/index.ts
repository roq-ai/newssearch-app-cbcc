import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface EducationalResourceInterface {
  id?: string;
  title: string;
  content: string;
  source_link: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface EducationalResourceGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  source_link?: string;
  user_id?: string;
}
