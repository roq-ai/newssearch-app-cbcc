import { UserInterface } from 'interfaces/user';
import { FactCheckInterface } from 'interfaces/fact-check';
import { GetQueryInterface } from 'interfaces';

export interface FeedbackInterface {
  id?: string;
  content: string;
  user_id: string;
  fact_check_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  fact_check?: FactCheckInterface;
  _count?: {};
}

export interface FeedbackGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  user_id?: string;
  fact_check_id?: string;
}
