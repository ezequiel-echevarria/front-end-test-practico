const _URLBase = process.env.REACT_APP_URL_API_BASE;

const handleRequest = (response) => {
    if (response.ok)
        return response.json();
    throw response;
}

const ItemServices = {
    GetByFilter: (filter) => {
        return fetch(`${_URLBase}items?q=${filter}`, {
                method: "GET",
            }).then(handleRequest)
            .catch(err => {
                throw err;
            });
    },
    GetItemById: (id) => {
        return fetch(`${_URLBase}items/${id}`, {
                method: "GET",
            }).then(handleRequest)
            .catch(err => {
                throw err;
            });
    }
}

export default ItemServices;