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
        _id
        name
        contain_articles {
          art_id
          amount_of
        }
        updatedOn
      }
    }
  }
`;

export const UPLOAD_ARTICLE_FILE = gql`
  mutation uploadArticleFile($file: Upload!) {
    uploadArticleFile(file: $file) {
      path
      id
      filename
      mimetype
    }
  }
`;

export const UPLOAD_PRODUCT_FILE = gql`
  mutation uploadProductFile($file: Upload!) {
    uploadProductFile(file: $file) {
      path
      id
      filename
      mimetype
    }
  }
`;
