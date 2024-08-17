import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { primaryColor } from "../color";
function UpdateOrder() {
  return (
    <div>
      <button type="button" className=" btn" style={{ color: primaryColor }}>
        Update{" "}
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="2x" />
      </button>
    </div>
  );
}

export default UpdateOrder;
