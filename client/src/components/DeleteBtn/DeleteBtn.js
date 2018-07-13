import React from "react";
import "./DeleteBtn.css";

const DeleteBtn = props => (
  <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-danger">
  {props.children}
  </button>
  );

export default DeleteBtn;
