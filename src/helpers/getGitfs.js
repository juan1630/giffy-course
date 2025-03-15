const api_key = "ZDRlzzlnaiMhcdBPzH2UFrMtYJGwYASv";

export default function getGifts(search = "", limit = 25, page = 0) {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${search}&limit=${limit}&offset=${page * limit}&rating=r&lang=en&bundle=messaging_non_clips`;

  return fetch(url)
    .then((resp) => resp.json())
    .then((response ) => {
        const { data  = [] } = response;
        if(Array.isArray(data)) {
            const gifs = data.map( image => {
                const { id, title } = image;
                const { url} = image.images.fixed_width_downsampled
                return { id, title, url };
            })
            return gifs;
        }

    });
}