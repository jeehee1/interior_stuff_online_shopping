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
          shopping page
        </a>
      </div>
    )
  );

  const navigate = useNavigate();

  const forwardAddItemHandler = () => {
    return navigate("new");
  };

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
          <Form method="DELETE" className={classes["btn-form"]}>
            <button onClick={() => {}}>Edit Design</button>
            <button>Remove Design</button>
            <button onClick={forwardAddItemHandler}>Add Item</button>
          </Form>
        </div>
      </div>
      <ShowInteriorDesignDetail items={items} />
    </div>
  );
};

export default ShowInteriorDesign;

export const action = async ({ params }: { params: any }) => {
  const id = params.designId;
  const response = await fetch(
    `https://interior-design-392ca-default-rtdb.firebaseio.com/design/${id}.json`,
    { method: "DELETE" }
  );
  if (!response.ok) {
    throw json({ message: "Cannot delete design." }, { status: 500 });
  } else {
    return redirect("/interiors");
  }
};
