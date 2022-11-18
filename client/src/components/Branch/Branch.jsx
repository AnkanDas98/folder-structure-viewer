import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import Node from "../Node/Node";

import style from "./branch.module.css";

const Branch = ({ data = [] }) => {
  const [items, setitems] = useState(data.length === 0 ? [] : data);

  if (data.length === 0) {
    return;
  }

  return (
    <div className={style.branch}>
      {items.map((node) => (
        <Node key={node._id} node={node} />
      ))}
    </div>
  );
};

export default Branch;
