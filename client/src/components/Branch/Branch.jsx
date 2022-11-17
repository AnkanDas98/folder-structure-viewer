import React, { useState } from "react";
import Node from "../Node/Node";

import style from "./branch.module.css";

const Branch = ({ data = [] }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={style.branch}>
      {data.map((node) => (
        <Node key={node.id} node={node} />
      ))}
    </div>
  );
};

export default Branch;
