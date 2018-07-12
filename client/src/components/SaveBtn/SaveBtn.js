import React from "react";
import "./SaveBtn.css";

const SaveBtn = props => (
<button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
{props.children}
</button>
);

export default SaveBtn;
