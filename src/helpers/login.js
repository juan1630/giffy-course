const ENDPOINT = "http://localhost:3200"

export default function loginService(email, password) {
    return fetch(`${ENDPOINT}/login`, {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password})
    })
    .then((resp) => {
        if( !resp.ok) throw new Error("Response is not ok")
            return resp.json();
    })
    .then(data => {
        const {token} = data;
        return token;
    })
}