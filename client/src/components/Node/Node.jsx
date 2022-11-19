import React, { useState } from "react";
import Branch from "../Branch/Branch";
import Modal from "../Modal/Modal";
import { axiosRequest } from "../../request";

import styles from "./node.module.css";
import { useSelector } from "react-redux";

const Node = ({ node }) => {
  let hasChild = node.hasChild ? true : false;
  const [isExpand, setIsExpand] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState("");
  const [method, setMethod] = useState("");
  const [childData, setChildData] = useState([]);

  const handleClick = (method) => {
    setShowModal(true);
    setId(node._id);
    setMethod(method);
  };

  const handleCancel = () => {
    setShowModal(false);
    setMethod("");
    setId("");
  };

  const clickHandler = async () => {
    if (hasChild) {
      try {
        const res = await axiosRequest.get(`/directory/${node._id}`);
        setChildData(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    setIsExpand(!isExpand);
  };

  return (
    <>
      <div className={styles.node}>
        <div className={styles.node_item} onClick={clickHandler}>
          <img
            className={`${styles.arrow} ${isExpand ? styles.active : ""}`}
            src="/icons/caret-right-outline-icon.svg"
            alt="arrow icon"
          />
          <img className={styles.folder} src="/icons/folder.png" alt="folder" />
          <p>{node.name}</p>
        </div>
        <div className={styles.action}>
          <button onClick={() => handleClick("add")} className={styles.addbtn}>
            Add
          </button>
          {!node.isRoot && (
            <button
              onClick={() => handleClick("delete")}
              className={styles.deletebtn}
            >
              Delete
            </button>
          )}
        </div>
        {showModal && method && (
          <Modal id={id} method={method} handleCancel={handleCancel} />
        )}
      </div>
      {hasChild && isExpand && (
        <div className={styles.branch}>
          <Branch data={childData} />
        </div>
      )}
    </>
  );
};

export default Node;
