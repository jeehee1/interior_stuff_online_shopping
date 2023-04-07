import React, { useState } from "react";
import classes from "./NewInteriorDesign.module.css";

import Select from "react-select";

const roomTypeOptions = [
  { value: "kitchen", label: "kitchen" },
  { value: "bedroom", label: "bedroom" },
  { value: "livingroom", label: "livingroom" },
  { value: "library", label: "library" },
  { value: "bathroom", label: "bathroom" },
];

const NewInteriorDesign = () => {
  // const [interiorsInfo, , setInteriorsInfo] = useState({
  //   type: null,
  //   imgUrl: null,
  // });
  const [page, setPage] = useState();
  // const [{imgUrl: "", imgCoorX: null, items: []}] = useReducer();

  // set type and img url => set img name and desc => set items coordinates => set items info;

  return (
    <div className={classes["new-design"]}>
      <form>
        <div>
          <label htmlFor="type">Room Type</label>
          <Select id="type" options={roomTypeOptions} />
        </div>
        <div>
          <label htmlFor="img">Interior Design Image Url</label>
          <input id="img" type="text" />
        </div>
      </form>
      <button>Next</button>
    </div>
  );
};

export default NewInteriorDesign;
