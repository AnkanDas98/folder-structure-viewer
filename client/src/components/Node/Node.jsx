import React, { useState } from "react";
import Branch from "../Branch/Branch";

import styles from "./node.module.css";

const Node = ({ node }) => {
  const hasChild = node.children ? true : false;
  const [isExpand, setIsExpand] = useState(false);

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
          <button className={styles.addbtn}>Add</button>
          <button className={styles.deletebtn}>Delete</button>
        </div>
      </div>
      {hasChild && isExpand && (
        <div className={styles.branch}>
          <Branch data={node.children} />
        </div>
      )}
    </>
  );
};

export default Node;
