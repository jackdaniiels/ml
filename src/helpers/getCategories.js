export const getCategories = async (id) => {
  
    const url = `https://api.mercadolibre.com/categories/${encodeURI(id)}`;
    const resp = await fetch(url);
    const result = await resp.json();
  
    const author = {
        name: 'Felipe',
        lastname: 'Manchego'
    };

    const pathFromRoot = result?.path_from_root;
    const filterCategories = pathFromRoot.map(category => category.name);

    const product = {
         author: author,
         categories: filterCategories,
     };    

    return product;
};