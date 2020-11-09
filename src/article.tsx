import React from "react";
import { useQuery, gql } from "@apollo/client";

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

const GET_ARTICLES = gql`
  query getAllArticles {
    getAllArticles {
      articles {
        art_id
        name
        stock
      }
    }
  }
`;

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
