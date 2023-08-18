import { AddCategory, GifGrid } from 'components';
import { useState } from 'react';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState<string[]>([]);

  const addCategory = (value: string) => {
    if (categories.includes(value)) return;

    setCategories([value, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={(newCategory) => addCategory(newCategory)} />

      {categories.map((category) => (
        <GifGrid category={category} key={category} />
      ))}
    </>
  );
};
