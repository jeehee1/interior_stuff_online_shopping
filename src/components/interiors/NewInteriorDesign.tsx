import React, { useReducer, useState } from "react";
import classes from "./NewInteriorDesign.module.css";

import RegisterImageForm from "./RegisterImageForm";

type InteriorDesignObject = {
  stage: number;
  imgType: string;
  imgName: string;
  imgDesc: string;
  imgUrl: string;
  items: InteriorDesignItemObject[];
};

type InteriorDesignItemObject = {
  itemName: string;
  itemPrice: number;
  itemDesc: string;
  itemAddress: string;
  itemCoorX: number;
  itemCoorY: number;
};

const NewInteriorDesign = () => {
  const [newInteriorDesign, setNewInteriorDesign] =
    useState<InteriorDesignObject>({
      stage: 0,
      imgType: "",
      imgName: "",
      imgDesc: "",
      imgUrl: "",
      items: [],
    });

  const newImageHandler = (
    type: string,
    name: string,
    desc: string,
    url: string
  ) => {
    setNewInteriorDesign({
      stage: 0,
      imgType: type,
      imgName: name,
      imgDesc: desc,
      imgUrl: url,
      items: [],
    });
  };
  console.log(newInteriorDesign);

  let stageComponent = null;
  switch (newInteriorDesign.stage) {
    case 0:
      stageComponent = <RegisterImageForm onAddNewImage={newImageHandler} />;
      break;
    case 1:
      break;
    default:
      break;
  }

  return <div className={classes["new-design"]}>{stageComponent}</div>;
};

export default NewInteriorDesign;
