import { useMutation } from "@apollo/client";
import * as React from "react";
import { FaFileUpload } from "react-icons/fa";
import { Product, Article, PanelTypes } from "../types";
import { UPLOAD_ARTICLE_FILE, UPLOAD_PRODUCT_FILE } from "../utils/queries";
import "./filters.scss";

export interface IProps {
  items: (Product | Article)[];
  type: PanelTypes;
}

const Data = (props: IProps) => {
  const [uploadArticleFile] = useMutation(UPLOAD_ARTICLE_FILE);
  const [uploadProductFile] = useMutation(UPLOAD_PRODUCT_FILE);
  const selectFile = ({
    target: {
      validity,
      files: [file],
    },
  }: any) => {
    const isArticleFile = props.type === PanelTypes.Article;
    const uploadMutation = isArticleFile
      ? uploadArticleFile
      : uploadProductFile;
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
        <div className="count">{props.items.length}</div>
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
