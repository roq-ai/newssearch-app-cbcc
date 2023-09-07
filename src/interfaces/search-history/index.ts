import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SearchHistoryInterface {
  id?: string;
  keywords: string;
  date?: any;
  region: string;
  source_credibility: number;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface SearchHistoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  keywords?: string;
  region?: string;
  user_id?: string;
}
