import { Article } from "./article.types";

export type Product = {
  _id: string;
  name: string;
  contain_articles: Article[];
};
