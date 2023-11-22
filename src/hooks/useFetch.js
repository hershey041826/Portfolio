import { useState, useEffect } from 'react';

export const useFetch = (apiPath, queryTerm = '') => {
  const [data, setData] = useState([]);
  const url = `https://google-translate1.p.rapidapi.com/language/translate/v2/languages/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;

  useEffect(() => {
    async function fetchLanguage() {
      const response = await fetch(url);

      const json = await response.json();
      setData(json.results);
    }

    fetchLanguage();
  }, [url]);

  return { data };
};
