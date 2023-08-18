import { FormEvent, useState } from 'react';

type Props = {
  onNewCategory: (value: string) => void;
};

export const AddCategory = ({ onNewCategory }: Props) => {
  const [inputValue, setInputValue] = useState('');

  const findAction = (event: FormEvent) => {
    event.preventDefault();

    const newCategory = inputValue.trim();

    if (newCategory.length <= 1) return;

    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(newCategory);
    setInputValue('');
  };

  return (
    <form onSubmit={(event) => findAction(event)}>
      <input
        type="text"
        placeholder="Buscar GIFs"
        value={inputValue}
        onChange={({ target }) => setInputValue(target.value)}
      />
    </form>
  );
};
