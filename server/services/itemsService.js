const axios = require('axios').default;
const _ = require('lodash');

const _BASEURL = 'https://api.mercadolibre.com';

const author = {
    name: "Ezequiel David",
    lastname: "Echevarria"
}

exports.search = (query) => {
    return axios.get(`${_BASEURL}/sites/MLA/search?q=${query}`)
        .then((response) => {
            let list_categories = [];
            let items = [];

            if (_.some(response.data.filters)) {
                const filter = _.find(response.data.filters, {
                    "id": "category"
                });

                if (_.some(filter))
                    _.head(filter.values).path_from_root.map((cat) => list_categories.push(cat.name));
            }

            if (_.some(response.data.results))
                response.data.results.slice(0, 4).map(item => {
                    items.push({
                        id: item.id,
                        title: item.title,
                        price: {
                            currency: item.currency_id,
                            amount: Number.parseInt(item.price),
                            decimals: Number.parseInt((item.price) % 1 * 100)
                        },
                        picture: item.thumbnail,
                        condition: item.condition,
                        free_shipping: item.shipping.free_shipping,
                        address: item.address.state_name
                    })
                });

            return {
                author: author,
                categories: list_categories,
                items: items
            };
        }).catch(errror => Promise.reject(error));
}


exports.getDetails = (id) => {
    return axios.all([
            axios.get(`${_BASEURL}/items/${id}`),
            axios.get(`${_BASEURL}/items/${id}/description`)
        ])
        .then(axios.spread((itemData, itemDescription) => {
            let itemDetails = {
                id: itemData.data.id,
                title: itemData.data.title,
                price: {
                    currency: itemData.data.currency_id,
                    amount: Number.parseInt(itemData.data.price),
                    decimals: Number.parseInt((itemData.data.price) % 1 * 100)
                },
                picture: null,
                condition: itemData.data.condition,
                free_shipping: itemData.data.shipping.free_shipping,
                sold_quantity: itemData.data.sold_quantity,
                description: itemDescription.data.plain_text
            }

            if (_.some(itemData.data.pictures))
                itemDetails.picture = _.head(itemData.data.pictures).secure_url

            return {
                author: author,
                item: itemDetails,
            }
        })).catch(errror => Promise.reject(error));
}