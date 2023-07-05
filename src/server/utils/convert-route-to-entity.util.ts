const mapping: Record<string, string> = {
  appointments: 'appointment',
  patients: 'patient',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
