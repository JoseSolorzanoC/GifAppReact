type Props = {
  gif: { id: string; title: string; url: string };
};
export const GifItem = ({ gif }: Props) => {
  return (
    <div className="card">
      <img src={gif.url} alt={gif.title} />
      <p>{gif.title}</p>
    </div>
  );
};
