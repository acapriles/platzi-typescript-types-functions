import { faker } from "@faker-js/faker";
import { CreateProductDto, FindProductDto, UpdateProductDto } from "./product.dto";
import { Product } from "./product.model";

export const products: Product[] = [];

export const addProduct = ( data: CreateProductDto ) => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: faker.datatype.uuid(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
      name: faker.commerce.department(),
    }
  }
  products.push( newProduct );

  return newProduct;
}

//? id: Product['id'] -> Se obtiene el tipado que tiene la propiedad "id" en la interface Product (string, number, boolean, etc)
export const updateProduct = (id: Product['id'], changes: UpdateProductDto ): Product => {
  const index = products.findIndex(item => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes
  }
  return products[index];
}

export const findProducts = (dto: FindProductDto): Product[] => {
  // code
  // dto.color = 'blue';
  // dto.isNew = true;
  return products;
}
