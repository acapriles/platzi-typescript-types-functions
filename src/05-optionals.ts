type Product = {
  id: string | number,
  isNew: boolean
  stock?: number,
}

export const createProduct = (
  id: string | number,
  isNew: boolean,
  stock?: number,
) => {
  return {
    id,
    // stock: stock || 10,
    // isNew: isNew || true,
    stock: stock ?? 10,
    isNew: isNew ?? true,
  }
}

//? -> "||" evalua valores falsy (https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
// 0 -> false
// '' -> false
// false -> false

//? -> "??" evalua valores nullish (osea null y undefined)
// null -> false
// undefined -> false

const resp = createProduct( 1, true, 12);
console.log(resp);

const resp2 = createProduct( 1, true);
console.log(resp2);
