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

            if (response.data.filters) {
                const filter = _.find(response.data.filters, {
                    "id": "category"
                });

                if (filter)
                    _.head(filter.values).path_from_root.map((cat) => list_categories.push(cat.name));
            }

            if (response.data.results)
                response.data.results.slice(0, 4).map(item => {
                    items.push({
                        id: item.id,
                        title: item.title,
                        price: {
                            currency: item.currency_id,
                            amount: Number.parseInt(item.price),
                            decimals: Number.parseInt((123.99) % 1 * 100)
                        },
                        picture: item.thumbnail || '',
                        condition: item.condition,
                        free_shipping: item.shipping.free_shipping || false,
                        address: item.address.state_name || ''
                    })
                });

            return {
                author: author,
                categories: list_categories,
                items: items
            };
        }).catch(errror => console.log(error))
}

exports.getDetails = (id) => {
    return Promise.resolve({
        'id': id
    });
}