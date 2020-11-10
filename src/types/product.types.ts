import { ProductArticle } from "./article.types";

export type Product = {
  _id: string;
  name: string;
  contain_articles: ProductArticle[];
};
