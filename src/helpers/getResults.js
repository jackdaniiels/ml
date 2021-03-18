export const getResults = async (item) => {

    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${encodeURI(item)}`;
    const resp = await fetch(url);
    const data = await resp.json();
    const {
        results
    } = data;
    const author = {
        name: 'Felipe',
        lastname: 'Manchego'
    };

    const searchResult = results.map((result) => {
        const {
            shipping
        } = result;
        return ({
            author: author,
            categories: 0,
            item: {
                id: result.id,
                title: result.title,
                city: result.seller_address.city.name,
                price: {
                    currency: result.currency_id,
                    amount: result.price,
                    decimals: result.price
                },
                picture: result.thumbnail,
                condition: result.condition,
                free_shipping: shipping.free_shipping,
            }
        });
    });

    return searchResult;
};