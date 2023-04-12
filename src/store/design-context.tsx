import React, { ReactNode, useState } from "react";
import Item from "../models/items";
import DesignImg from "../models/designimg";
import Design from "../models/design";

type DesignContextObj = {
  interiorDesign: Design;
  addImage: (imgInfo: DesignImg) => void;
  addItems: (items: Item[]) => void;
  resetDesign: () => void;
};

export const DesignContext = React.createContext<DesignContextObj>({
  interiorDesign: { img: new DesignImg("", "", "", ""), items: [] },
  addImage: () => {},
  addItems: () => {},
  resetDesign: () => {},
});

const DesignContextProvider: React.FC<{ children: ReactNode }> = (props) => {
  const [interiorDesign, setInteriorDesign] = useState<Design>();

  const addImageHandler = (imgInfo: DesignImg) => {
    setInteriorDesign({
      img: new DesignImg(
        imgInfo.imgType,
        imgInfo.imgName,
        imgInfo.imgDesc,
        imgInfo.imgUrl
      ),
      items: [],
    });
  };

  const addItemsHandler = (items: Item[]) => {
    setInteriorDesign({ img: interiorDesign!.img, items: items });
  };

  const resetDesignHandler = () => {
    setInteriorDesign({ img: new DesignImg("", "", "", ""), items: [] });
  };

  console.log(interiorDesign);

  const contextValue: DesignContextObj = {
    interiorDesign: interiorDesign!,
    addImage: addImageHandler,
    addItems: addItemsHandler,
    resetDesign: resetDesignHandler,
  };

  return (
    <DesignContext.Provider value={contextValue}>
      {props.children}
    </DesignContext.Provider>
  );
};

export default DesignContextProvider;
