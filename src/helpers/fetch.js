const baseUrl = 'http://localhost:5000'

const fetchSinToken = (endpoint, data, method = "GET") => {
    const url = `${baseUrl}/${endpoint}`;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    if (method === "GET") {
        return fetch(url);
    } else {
        return fetch(url, {
            method,
            headers: myHeaders,
            redirect: 'follow',
            body: JSON.stringify(data),
        });
    }
};

const fetchConToken = (endpoint, data, method = 'GET') => {

    const url = `${baseUrl}/${endpoint}`;
    const token = localStorage.getItem('token') || '';

    if (method === 'GET') {
        return fetch(url, {
            method,
            headers: {
                'x-token': token
            }
        });
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify(data)
        });
    }
}



export {
    fetchSinToken,
    fetchConToken
}