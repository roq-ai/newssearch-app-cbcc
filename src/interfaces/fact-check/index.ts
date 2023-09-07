import { FeedbackInterface } from 'interfaces/feedback';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface FactCheckInterface {
  id?: string;
  title: string;
  summary: string;
  source_link: string;
  source_credibility: number;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  feedback?: FeedbackInterface[];
  user?: UserInterface;
  _count?: {
    feedback?: number;
  };
}

export interface FactCheckGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  summary?: string;
  source_link?: string;
  user_id?: string;
}
