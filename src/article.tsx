import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ARTICLES } from "./utils/queries";

interface Article {
  art_id: number;
  name: string;
  stock: number;
}

interface ArticleData {
  getAllArticles: ArticleList;
}
interface ArticleList {
  articles: Article[];
}

export function ArticlesList() {
  const { loading, data } = useQuery<ArticleData, {}>(GET_ARTICLES, {});
  return (
    <div>
      <h3>Available Inventory</h3>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Model</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.getAllArticles.articles.map((article: any) => (
                <tr>
                  <td>{article.name}</td>
                  <td>{article.stock}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
