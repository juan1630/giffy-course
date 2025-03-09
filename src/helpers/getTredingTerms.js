import { API_KEY, API_URL } from "../settings/index";

export function getTrendingTerms() {

    const url = `${API_URL}/trending/searches?api_key=${API_KEY}`
    return fetch(url)
    .then( data => data.json())
    .then(resp => resp.data)
    .catch(error => console.log(error));
}