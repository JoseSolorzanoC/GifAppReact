export const getGifs = async (apiKey: string, category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;

  const response = await fetch(url);

  const { data = [] } = await response.json();

  const gifs = data.map(
    (img: { id: string; title: string; images: { downsized_medium: { url: string } } }) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    })
  );

  return gifs;
};
