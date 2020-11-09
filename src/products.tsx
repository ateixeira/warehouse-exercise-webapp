import React from "react";
import { useQuery, gql } from "@apollo/client";

interface Product {
  id: number;
  model: string;
  year: number;
  stock: number;
}

interface ProductData {
  products: Product[];
}

interface ProductVars {
  year: number;
}

const GET_PRODUCTS = gql`
  query getAllProducts {
    products {
      id
      name
      price
      articles {
        name
      }
    }
  }
`;

export function ProductsList() {
  const { loading, data } = useQuery<ProductData, ProductVars>(
    GET_PRODUCTS,
    {}
  );
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
              data.products.map((product: any) => (
                <tr>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
