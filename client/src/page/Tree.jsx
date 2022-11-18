import React from "react";
import { useState, useEffect } from "react";
import { axiosRequest } from "../request";
import { useDispatch, useSelector } from "react-redux";
import { fetchDirectory } from "../actions/directoryAction";

import Branch from "../components/Branch/Branch";

import styles from "./tree.module.css";

const Tree = () => {
  const { data } = useSelector((state) => state.allDirectory);
  const dispatch = useDispatch();

  // const data = [
  //   {
  //     id: "0",
  //     name: "Downloads",
  //     children: [
  //       {
  //         id: "1",
  //         name: "Movies",
  //         children: [
  //           {
  //             id: "2",
  //             name: "redemtion.mkv",
  //           },
  //           {
  //             id: "3",
  //             name: "stocker.mkv",
  //           },
  //           {
  //             id: "4",
  //             name: "joker.mkv",
  //           },
  //           {
  //             id: "5",
  //             name: "Aporajita",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: "6",
  //     name: "Photos",
  //     children: [
  //       {
  //         id: "7",
  //         name: "image.jpg",
  //       },
  //       {
  //         id: "8",
  //         name: "image.png",
  //       },
  //     ],
  //   },
  //   {
  //     id: "9",
  //     name: "Books",
  //     children: [],
  //   },
  // ];

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
