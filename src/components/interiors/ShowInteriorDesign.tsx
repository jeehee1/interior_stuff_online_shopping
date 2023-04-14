import React, { useRef } from "react";
import { useState } from "react";
import classes from "./ShowInteriorDesign.module.css";
import ShowInteriorDesignDetail from "./ShowInteriorDesignDetail";

const ShowInteriorDesign = (props: {
  info: {
    id: string;
    imgId: number;
    imgType: string;
    imgName: string;
    imgDesc: string;
    imgUrl: string;
    items: {
      itemId: number;
      itemName: string;
      itemPrice: number;
      itemDesc: string;
      itemAddress: string;
      itemCoorX: number;
      itemCoorY: number;
    }[];
  };
}) => {
  const [showInfo, setShowInfo] = useState(false);

  const imgRef = useRef<HTMLImageElement>(null);

  const showStuffInfoHandler = () => {
    setShowInfo(true);
  };

  const hideStuffInfoHandler = () => {
    setShowInfo(false);
    console.log("hide info");
  };

  const interiorDesignInfo = props.info;
  console.log(interiorDesignInfo);

  const displayInfo: any = [];
  interiorDesignInfo.items.map((item) =>
    displayInfo.push(
      <div
        onMouseOver={showStuffInfoHandler}
        onMouseOut={hideStuffInfoHandler}
        style={{
          position: "absolute",
          left: `${item.itemCoorX}px`,
          top: `${item.itemCoorY}px`,
          background: "#8e8e8e66",
          color: "white",
          borderRadius: "4px",
          justifyContent: "center",
        }}
      >
        <h3 className={classes["stuff-title"]}>{item.itemName}</h3>
        <p className={classes["stuff-price"]}>{item.itemPrice}$</p>
        <a href={item.itemAddress}>go for shopping</a>
      </div>
    )
  );

  return (
    <div className={classes["img-frame"]} key={interiorDesignInfo.id}>
      <div className={classes.img}>
        <img
          onMouseOver={showStuffInfoHandler}
          onMouseOut={hideStuffInfoHandler}
          src={interiorDesignInfo.imgUrl}
          alt="cannot load the image."
          ref={imgRef}
        />
        {showInfo && displayInfo}
      </div>
      <ShowInteriorDesignDetail
        imgInfo={{
          name: interiorDesignInfo.imgName,
          desc: interiorDesignInfo.imgDesc,
        }}
        items={interiorDesignInfo.items}
      />
    </div>
  );
};

export default ShowInteriorDesign;
