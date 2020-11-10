import { useMutation } from "@apollo/client";
import * as React from "react";
import { FaFileUpload } from "react-icons/fa";
import { PanelTypes, WarehouseData } from "../types";
import { UPLOAD_ARTICLE_FILE, UPLOAD_PRODUCT_FILE } from "../utils/queries";
import "./filters.scss";

export interface IProps {
  items: WarehouseData;
  type: PanelTypes;
}

const countArticle = (props: IProps) => props.items.articles.length;
const countProduct = (props: IProps) => props.items.products.length;

const Data = (props: IProps) => {
  const [uploadArticleFile] = useMutation(UPLOAD_ARTICLE_FILE);
  const [uploadProductFile] = useMutation(UPLOAD_PRODUCT_FILE);
  const isArticle = props.type === PanelTypes.Article;
  const totalItems = isArticle ? countArticle(props) : countProduct(props);
  const selectFile = ({
    target: {
      validity,
      files: [file],
    },
  }: any) => {
    const uploadMutation = isArticle ? uploadArticleFile : uploadProductFile;
    return (
      validity.valid &&
      uploadMutation({ variables: { file } }).then(() => {
        console.log("FILE UPLOADED");
      })
    );
  };

  return (
    <>
      <div className="data">
        <div className="count">{totalItems}</div>
        <div className="upload">
          <FaFileUpload />
          <input
            type="file"
            id="myFile"
            name="filename"
            onChange={selectFile}
          />
        </div>
      </div>
    </>
  );
};

export default Data;
