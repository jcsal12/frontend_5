import { jsonProvider } from 'services/jsonProvider';
import { useEffect, useState } from 'react';

export const useLibros = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    jsonProvider().then((response) => {
      setData(response.data)
      setLoading(false)
    });
  });

  return {
    data,
    loading
  };
};
