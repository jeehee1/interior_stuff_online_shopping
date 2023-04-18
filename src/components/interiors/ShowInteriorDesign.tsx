import React, { useRef } from "react";
import { useState } from "react";
import classes from "./ShowInteriorDesign.module.css";
import ShowInteriorDesignDetail from "./ShowInteriorDesignDetail";
import Card from "../layout/Card";
import {
  Form,
  json,
  redirect,
  useNavigate,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";

const ShowInteriorDesign = ({
  design,
  items,
}: {
  design: {
    id: string;
    imgType: string;
    imgName: string;
    imgDesc: string;
    imgUrl: string;
  };
  items: {
    itemId: string;
    itemName: string;
    itemPrice: number;
    itemDesc: string;
    itemAddr: string;
    itemCoorX: number;
    itemCoorY: number;
  }[];
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

  const displayInfo: any = [];

  items.map((item) =>
    displayInfo.push(
      <div
        onMouseOver={showStuffInfoHandler}
        onMouseOut={hideStuffInfoHandler}
        style={{
          position: "absolute",
          left: `${item.itemCoorX}px`,
          top: `${item.itemCoorY}px`,
          padding: `0.2rem 0.5rem`,
          background: "#8e8e8e66",
          color: "white",
          borderRadius: "4px",
          justifyContent: "center",
        }}
      >
        <h3 className={classes["item-title"]}>{item.itemName}</h3>
        <p className={classes["item-price"]}>{item.itemPrice}$</p>
        <a href={item.itemAddr} className={classes["item-addr"]}>
          go to buy
        </a>
      </div>
    )
  );

  const navigate = useNavigate();

  return (
    <div className={classes.show}>
      <div key={design.id}>
        <h4>{design.imgName}</h4>
        <p>{design.imgDesc}</p>
        <div className={classes["img-frame"]}>
          <img
            onMouseOver={showStuffInfoHandler}
            onMouseOut={hideStuffInfoHandler}
            src={design.imgUrl}
            alt="cannot load the image."
            ref={imgRef}
          />
          {showInfo && displayInfo}
        </div>
        <div>
          <button
            onClick={() => {
              navigate("edit");
            }}
          >
            Edit Design
          </button>
          <button onClick={() => navigate("new")}>Add Item</button>
        </div>
      </div>
      <ShowInteriorDesignDetail items={items} />
    </div>
  );
};

export default ShowInteriorDesign;