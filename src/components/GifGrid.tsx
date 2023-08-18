import { useFetchGifs } from 'hooks/useFetchGifs';
import { GifItem } from 'components';

type Props = {
  category: string;
};

export const GifGrid = ({ category }: Props) => {
  const { images, isLoading } = useFetchGifs(category);
  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}
      <div className="card-grid">
        {images.map((gif) => (
          <GifItem key={gif.id} gif={gif} />
          // <GifItem key={gif.id} gif={gif} {...gif} --> Esto es posible />
        ))}
      </div>
    </>
  );
};
