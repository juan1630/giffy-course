export default function getGifById( id ) {
  const url =
    `https://api.giphy.com/v1/gifs/${id}?api_key=ZDRlzzlnaiMhcdBPzH2UFrMtYJGwYASv&rating=g`;
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.data)
        const { username, title , rating, images, id } = data.data;
        const {url} = images.fixed_width_downsampled;

        return {
            username, title, rating, url, id
        }
    });
}
