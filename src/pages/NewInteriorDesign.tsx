import React, { useContext, useState } from "react";
import classes from "./NewInteriorDesign.module.css";

import RegisterImageForm from "../components/interiors/RegisterImageForm";
import RegisterItemsForm from "../components/interiors/RegisterItemsForm";
import DesignContextProvider, { DesignContext } from "../store/design-context";

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
