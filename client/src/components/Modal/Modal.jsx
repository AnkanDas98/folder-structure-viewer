import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { storeDirectory, deleteDirectory } from "../../actions/directoryAction";
import styles from "./modal.module.css";
import { axiosRequest } from "../../request";
import Branch from "../Branch/Branch";

const Modal = ({ method, handleCancel, id }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleSubmission = async (e) => {
    e.preventDefault();
    if (name === "") {
      setError(true);
    } else {
      handleCancel();
      storeDirectory(dispatch, id, { name });
      window.location.reload(false);
    }
  };

  const deleController = async () => {
    deleteDirectory(dispatch, id);
    handleCancel();
    window.location.reload(false);
  };

  return (
    <div
      className={styles.modal}
      style={
        method === "delete"
          ? { height: "12vh" }
          : error
          ? { height: "180px" }
          : { height: "150px" }
      }
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
            <button onClick={deleController} className={styles.deleteBtn}>
              Delete
            </button>
          </div>
        </>
      )}
      {method === "add" && (
        <>
          <h3 className={styles.title}>Create New Folder</h3>
          <form onSubmit={handleSubmission} className={styles.form}>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Folder Name"
            />
            {error && (
              <span className={styles.error}>Folder can not empty</span>
            )}
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
