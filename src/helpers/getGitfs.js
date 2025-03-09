const api_key = "ZDRlzzlnaiMhcdBPzH2UFrMtYJGwYASv";

export default function getGifts(search = "") {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${search}&limit=8&offset=0&rating=r&lang=en&bundle=messaging_non_clips`;

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