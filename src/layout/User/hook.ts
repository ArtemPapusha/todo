import { useMatches } from 'react-router-dom';

export const useContainer = () => {
  const matches = useMatches();

  const pageData = matches.at(-1);

  return pageData;
};
