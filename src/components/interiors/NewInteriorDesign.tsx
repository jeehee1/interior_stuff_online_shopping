import React, { useContext, useEffect, useReducer, useState } from "react";
import classes from "./NewInteriorDesign.module.css";

import RegisterImageForm from "./RegisterImageForm";
import RegisterItemsForm from "./RegisterItemsForm";
import DesignContextProvider, {
  DesignContext,
} from "../../store/design-context";
import Design from "../../models/design";

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
  const [stage, setStage] = useState<number>(0);
  const designCtx = useContext(DesignContext);

  let stageComponent = null;
  switch (stage) {
    case 0:
      stageComponent = <RegisterImageForm onNextStage={() => setStage(1)} />;
      break;
    case 1:
      stageComponent = <RegisterItemsForm onNextStage={() => setStage(2)} />;
      break;
    case 2:
      stageComponent = (
        <p>Save Successfully! {designCtx.interiorDesign.img.imgName}</p>
      );
      break;
    default:
      break;
  }

  return (
    <DesignContextProvider>
      <div className={classes["new-design"]}>{stageComponent}</div>
    </DesignContextProvider>
  );
};

export default NewInteriorDesign;
