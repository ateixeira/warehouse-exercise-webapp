import { gql } from "@apollo/client";

export const GET_ARTICLES = gql`
  query getAllArticles {
    getAllArticles {
      articles {
        art_id
        name
        stock
        updatedOn
      }
    }
  }
`;
export const GET_PRODUCTS = gql`
  query getAllProducts {
    getAllProducts {
      products {
        id
        name
        price
        articles {
          art_id
          name
          stock
        }
        updatedOn
      }
    }
  }
`;

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      path
      id
      filename
      mimetype
    }
  }
`;
