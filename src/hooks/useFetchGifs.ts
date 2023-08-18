import { getGifs } from 'helpers/getGifs';
import { useEffect, useState } from 'react';

export const useFetchGifs = (category: string) => {
  const apiKey = 'th00sbURaMAb561sl6QVrgZAcJfopJH5';

  const [categoryGifs, setCategoryGifs] = useState<{ id: string; title: string; url: string }[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);

  const getCategoryGifs = async () => {
    setCategoryGifs(await getGifs(apiKey, category));
    setIsLoading(false);
  };

  useEffect(() => {
    getCategoryGifs();
  });

  return {
    images: categoryGifs as { id: string; title: string; url: string }[],
    isLoading: isLoading,
  };
};
