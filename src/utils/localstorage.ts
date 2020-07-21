export const set = (key: string, value: any): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const get = <T = any>(key: string): T | null => {
  const result = localStorage.getItem(key);
  if (result) return JSON.parse(result);
  return null;
};

export const remove = (key: string): void => {
  localStorage.removeItem(key);
};
