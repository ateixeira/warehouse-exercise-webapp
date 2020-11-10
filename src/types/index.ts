import { Article } from "./article.types";
import { Product } from "./product.types";

export * from "./article.types";
export * from "./product.types";

export enum PanelTypes {
  Article,
  Product,
}

export interface ArticleData {
  getAllArticles: ArticleList;
}
export interface ProductData {
  getAllProducts: ProductList;
}
export interface ArticleList {
  articles: Article[];
}
export interface ProductList {
  products: Product[];
}
export interface WarehouseData {
  articles: Article[];
  products: Product[];
}
