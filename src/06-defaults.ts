type Product = {
  id: string | number,
  isNew: boolean
  stock?: number,
}

export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10,
) => {
  return {
    id,
    stock,
    isNew,
  }
}

const resp = createProduct( 1, true, 12);
console.log(resp);

const resp2 = createProduct( 1, true);
console.log(resp2);
