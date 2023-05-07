import React, { useRef } from "react";
import { useState } from "react";
import classes from "./ShowInteriorDesign.module.css";
import ShowInteriorDesignDetail from "./ShowInteriorDesignDetail";
import { useNavigate, useParams } from "react-router-dom";

type Design = {
  id: string;
  imgType: string;
  imgName: string;
  imgDesc: string;
  imgUrl: string;
  items: {
    itemId: string;
    itemName: string;
    itemPrice: number;
    itemDesc: string;
    itemAddr: string;
    itemCoorX: number;
    itemCoorY: number;
  }[];
};

type DesignInfo = {
  id: string;
  imgType: string;
  imgName: string;
  imgDesc: string;
  imgUrl: string;
};

type DesignItem = {
  itemId: string;
  itemName: string;
  itemPrice: number;
  itemDesc: string;
  itemAddr: string;
  itemCoorX: number;
  itemCoorY: number;
}[];

const ShowInteriorDesign = ({ design }: { design: Design }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [editBtn, setEditBtn] = useState(false);

  const { designId } = useParams();

  const designDetail: DesignInfo = {
    id: designId!,
    imgType: design.imgType,
    imgName: design.imgName,
    imgDesc: design.imgDesc,
    imgUrl: design.imgUrl,
  };

  const items: DesignItem = [];
  for (const key in design.items) {
    items.push({
      itemId: key,
      itemName: design.items[key].itemName,
      itemPrice: design.items[key].itemPrice,
      itemDesc: design.items[key].itemDesc,
      itemAddr: design.items[key].itemAddr,
      itemCoorX: design.items[key].itemCoorX,
      itemCoorY: design.items[key].itemCoorY,
    });
  }

  const imgRef = useRef<HTMLImageElement>(null);

  const showStuffInfoHandler = () => {
    setShowInfo(true);
  };

  const hideStuffInfoHandler = () => {
    setShowInfo(false);
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
      <div key={design.id} className={classes.design}>
        <h4 className={classes['img-name']}>{design.imgName}</h4>
        <p className={classes['img-desc']}>{design.imgDesc}</p>
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
          {!editBtn && (
            <button onClick={() => setEditBtn(!editBtn)}>Edit</button>
          )}
          {editBtn && (
            <>
              <button onClick={() => setEditBtn(!editBtn)}>Edit Cancel</button>
              <button
                onClick={() => {
                  navigate("edit");
                }}
              >
                Edit Design
              </button>
              <button onClick={() => navigate("new")}>Add Item</button>
            </>
          )}
        </div>
      </div>
      <ShowInteriorDesignDetail
        design={design}
        items={items}
        showEditBtn={editBtn}
      />
    </div>
  );
};

export default ShowInteriorDesign;
