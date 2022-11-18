import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosRequest } from "../../request";
import Branch from "../Branch/Branch";
import Modal from "../Modal/Modal";

import { fetchChildDirectory } from "../../actions/directoryAction";

import styles from "./node.module.css";

const Node = ({ node }) => {
  let hasChild = node.hasChild ? true : false;
  // const [childData, setChildData] = useState([]);
  const [isExpand, setIsExpand] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState("");
  const [method, setMethod] = useState("");

  const dispatch = useDispatch();
  const { childData } = useSelector((state) => state.childDirectory);

  const handleClick = (method) => {
    setShowModal(true);
    setId(node.id);
    setMethod(method);
  };

  const handleCancel = () => {
    setShowModal(false);
    setMethod("");
    setId("");
  };

  useEffect(() => {
    if (hasChild) {
      fetchChildDirectory(dispatch, node._id);
      hasChild = false;
    }
  }, [hasChild]);

  return (
    <>
      <div className={styles.node}>
        <div
          className={styles.node_item}
          onClick={() => setIsExpand(!isExpand)}
        >
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
          <Modal method={method} handleCancel={handleCancel} />
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
