import { Product } from "./product.model";

//? Omite propiedades (Omit)
export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

//? Selecciona propiedades (Pick)
interface Example extends Pick<Product, 'color' | 'description'> {
  categoryId: string;
}

//? Coloca todas las propiedades de la interface como opcionales (Partial)
export interface UpdateProductDto extends Partial<CreateProductDto> {}

//? Coloca todas las propiedades de la interface o type como obligatorias (Required)
type example2 = Required<Product>;

//? Colococa todas las propiedades de sólo lectura (Readonly). Multiples herencias herencias en esta interface
export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
  //? Incorpora la propiedad tags de sólo lectura (Readonly) y con la restricción de las mutaciones en los Arrays (ReadonlyArray)
  readonly tags: ReadonlyArray<string>;
}
