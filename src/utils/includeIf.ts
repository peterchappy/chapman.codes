export const includeIf = <T>(condition: boolean, data: T[]): T[] => {
  return condition ? data : [];
};
