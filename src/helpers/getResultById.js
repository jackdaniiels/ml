export const getResultById = async (id) => {
  
    const url = `https://api.mercadolibre.com/items/${encodeURI(id)}`;
    const resp = await fetch(url);
    const result = await resp.json();
  
    const author = {
        name: 'Felipe',
        lastname: 'Manchego'
    };

    const product = {
         author: author,
         categories: 0,
         item: {
             picture: result?.pictures[0].secure_url,
             title: result.title,
             condition: result?.condition,
             description: result?.warranty,
             sold_quantity: result?.sold_quantity,
         id: result.id,
             price: result.price,
             
             city: result.seller_address.city.name
         }
     };    

    return product;
};