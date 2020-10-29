const axios = require('axios').default;
const _ = require('lodash');

const _BASEURL = 'https://api.mercadolibre.com';

const author = {
    name: "Ezequiel David",
    lastname: "Echevarria"
}

const categoryFilterPredicate = {
    "id": "category"
};

const mapToItem = (item) => {
    return {
        id: item.id,
        title: item.title,
        price: {
            currency: item.currency_id,
            amount: Number.parseInt(item.price),
            decimals: Number.parseInt((item.price) % 1 * 100)
        },
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
    }
}

exports.search = (query) => {
    return axios.get(`${_BASEURL}/sites/MLA/search?q=${query}`)
        .then((response) => {
            let list_categories = [];
            let items = [];

            if (_.some(response.data.filters, categoryFilterPredicate))
                _.head(
                    _.find(response.data.filters, categoryFilterPredicate).values
                ).path_from_root.map((cat) => list_categories.push(cat.name));

            if (_.some(response.data.results))
                response.data.results.slice(0, 4).map(item => {
                    items.push({
                        ...mapToItem(item),
                        picture: item.thumbnail,
                        address: item.address.state_name
                    })
                });

            return {
                author: author,
                categories: list_categories,
                items: items
            };
        }).catch(errror => {
            throw errror;
        });
}


exports.getDetails = (id) => {
    return axios.all([
            axios.get(`${_BASEURL}/items/${id}`),
            axios.get(`${_BASEURL}/items/${id}/description`)
        ])
        .then(axios.spread((itemData, itemDescription) => {
            let itemDetails = {
                ...mapToItem(itemData.data),
                sold_quantity: itemData.data.sold_quantity,
                description: itemDescription.data.plain_text
            }

            if (_.some(itemData.data.pictures))
                itemDetails.picture = _.head(itemData.data.pictures).secure_url

            return {
                author: author,
                item: itemDetails,
            }
        })).catch(errror => {
            throw errror;
        });
}