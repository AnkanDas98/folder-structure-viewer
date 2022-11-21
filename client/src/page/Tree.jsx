import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDirectory } from "../actions/directoryAction";

import Branch from "../components/Branch/Branch";

import styles from "./tree.module.css";

const Tree = () => {
  const { data } = useSelector((state) => state.allDirectory);
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchDirectory(dispatch);
  }, [dispatch]);

  if (data.length === 0) {
    return;
  }

  return (
    <div className={styles.tree}>
      <h1>Simple Folder Structure Viewer</h1>
      <div>
        <Branch data={data} />
      </div>
    </div>
  );
};

export default Tree;
