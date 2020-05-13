import { Character, Product } from '../types/types';
import axios from 'axios';
import { Data } from '../mock-data/mock-products';

let database: Array<Product> = Data;

export const createProduct = (product: Product) => {
  database.push(product);
};

export const removeProduct = (id: number) => {
  const newArr = database.filter((pro: Product) => pro.id !== id);
  database = newArr;
};

export const updateProduct = (product: Product, id: number) => {
  database.map((pro: Product) => {
    if ( id === product.id ){
      pro.name = product.name;
      pro.type = product.type;
    } else {
      console.log('product was not found');
    }
  });
};

export const readProducts = (): void => {
    database.forEach( product => console.log(product));
};

export const returnProducts = (): Product[] => {
  return database.map( product => product);
};


export const readProduct = (id: number): any => {
  const returnProduct = database.filter( pro => pro.id === id);
  if (returnProduct.length === 0){
    console.log('No product found');
  } else {
    console.log(returnProduct);
  }
};

export const getData = async (): Promise<Array<Character>> => {
  return axios.get('https://rickandmortyapi.com/api/episode/')
    .then(data => data.data)
    .then(character => {
        return character.results;
    });
};

export const getTrainers = async () => {
  return await axios.get('https://stockx.com/api/products/f33dca85-0dd3-46a9-aec9-352f54fbbac1/related?currency=GBP&country=GB')
    .then(data => data.data)
    .then(character => {
      console.log(character.Products);
      return character.Products;
    });
};


