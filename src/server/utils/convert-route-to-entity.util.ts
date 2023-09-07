const mapping: Record<string, string> = {
  companies: 'company',
  'educational-resources': 'educational_resource',
  'fact-checks': 'fact_check',
  feedbacks: 'feedback',
  'search-histories': 'search_history',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
