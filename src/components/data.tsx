import { useMutation } from "@apollo/client";
import * as React from "react";
import { FaFileUpload } from "react-icons/fa";
import { Product, Article } from "../types";
import { UPLOAD_FILE } from "../utils/queries";
import "./filters.scss";

export interface IProps {
  items: (Product | Article)[];
}

const Data = (props: IProps) => {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const selectFile = ({
    target: {
      validity,
      files: [file],
    },
  }: any) => {
    return (
      validity.valid &&
      uploadFile({ variables: { file } }).then(() => {
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
