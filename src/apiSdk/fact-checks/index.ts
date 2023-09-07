import axios from 'axios';
import queryString from 'query-string';
import { FactCheckInterface, FactCheckGetQueryInterface } from 'interfaces/fact-check';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getFactChecks = async (
  query?: FactCheckGetQueryInterface,
): Promise<PaginatedInterface<FactCheckInterface>> => {
  const response = await axios.get('/api/fact-checks', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createFactCheck = async (factCheck: FactCheckInterface) => {
  const response = await axios.post('/api/fact-checks', factCheck);
  return response.data;
};

export const updateFactCheckById = async (id: string, factCheck: FactCheckInterface) => {
  const response = await axios.put(`/api/fact-checks/${id}`, factCheck);
  return response.data;
};

export const getFactCheckById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/fact-checks/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteFactCheckById = async (id: string) => {
  const response = await axios.delete(`/api/fact-checks/${id}`);
  return response.data;
};
