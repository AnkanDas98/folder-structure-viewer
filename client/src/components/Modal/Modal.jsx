import React from "react";

import styles from "./modal.module.css";

const Modal = ({ method, handleCancel }) => {
  return (
    <div
      className={styles.modal}
      style={method === "delete" ? { height: "12vh" } : { height: "15vh" }}
    >
      {method === "delete" && (
        <>
          <h3 className={styles.text}>
            Are you sure! Delete will be permanent{" "}
          </h3>
          <div className={styles.btnContainer}>
            <button onClick={handleCancel} className={styles.cancelBtn}>
              Cancel
            </button>
            <button className={styles.deleteBtn}>Delete</button>
          </div>
        </>
      )}
      {method === "add" && (
        <>
          <h3 className={styles.title}>Create New Folder</h3>
          <form className={styles.form}>
            <input type="text" placeholder="Folder Name" />
            <div className={`${styles.btnContainer} ${styles.btnContainerAdd}`}>
              <button onClick={handleCancel} className={styles.cancelBtn}>
                Cancel
              </button>
              <button type="submit" className={styles.submitBtn}>
                Submit
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Modal;
