import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = (await response).json();
  return data;
}

const anotherFn = async (uriApi) => {
  try {
    const products = await fetchData(`${uriApi}/products`);
    const product = await fetchData(`${uriApi}/products/${products[0].id}`);
    const category = await fetchData(`${uriApi}/categories/${product?.category?.id}`);

    console.log(products);
    console.log(product.title);
    console.log(category.name);
  } catch (error) {
    console.error(error);
  }
}

anotherFn(API);