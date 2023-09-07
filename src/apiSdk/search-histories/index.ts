import axios from 'axios';
import queryString from 'query-string';
import { SearchHistoryInterface, SearchHistoryGetQueryInterface } from 'interfaces/search-history';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSearchHistories = async (
  query?: SearchHistoryGetQueryInterface,
): Promise<PaginatedInterface<SearchHistoryInterface>> => {
  const response = await axios.get('/api/search-histories', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSearchHistory = async (searchHistory: SearchHistoryInterface) => {
  const response = await axios.post('/api/search-histories', searchHistory);
  return response.data;
};

export const updateSearchHistoryById = async (id: string, searchHistory: SearchHistoryInterface) => {
  const response = await axios.put(`/api/search-histories/${id}`, searchHistory);
  return response.data;
};

export const getSearchHistoryById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/search-histories/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSearchHistoryById = async (id: string) => {
  const response = await axios.delete(`/api/search-histories/${id}`);
  return response.data;
};
