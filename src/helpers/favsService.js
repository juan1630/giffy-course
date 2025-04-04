const ENDPOINT = "http://localhost:3200"

export const favsService = ({id, jwt}) => {

    return fetch(`${ENDPOINT}/favs/${id}`, {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({jwt})
    })
    .then((resp) => {
        if( !resp.ok) throw new Error("Response is not ok")
            return resp.json();
    })
    .then(data => {
        const {favs} = data;
        return favs;
    })
}