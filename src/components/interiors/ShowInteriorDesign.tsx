import React, { useRef } from "react";
import { useState } from "react";
import classes from "./ShowInteriorDesign.module.css";
import ShowInteriorDesignDetail from "./ShowInteriorDesignDetail";

type Offset = {
  top: number | null;
  left: number | null;
  width: number | null;
  height: number | null;
};

const ShowInteriorDesign = (props: {
  info: {
    type: string;
    id: number;
    imgType: string;
    imgName: string;
    imgDesc: string;
    imgUrl: string;
    items: {
      name: string;
      price: number;
      desciption: string;
      shopAddress: string;
      coorX: number;
      coorY: number;
    }[];
  };
}) => {
  const [showInfo, setShowInfo] = useState(false);
  const [offset, setOffset] = useState<Offset>({
    top: null,
    left: null,
    width: null,
    height: null,
  });

  const imgRef = useRef<HTMLImageElement>(null);

  // useEffect(() => {}, [imgRef]);
  // console.log(offset);

  const showStuffInfoHandler = () => {
    setShowInfo(true);

    const curImgOffset = imgRef.current!.getBoundingClientRect();
    console.log(curImgOffset);
    setOffset({
      top: curImgOffset.top,
      left: curImgOffset.left,
      width: curImgOffset.width,
      height: curImgOffset.height,
    });
  };

  const hideStuffInfoHandler = () => {
    setShowInfo(false);
    console.log("hide info");
  };

  //get coordinates when clicking at some point of the image.
  const getCoordinatesHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    const x = offset.left ? event.pageX - offset.left : -1;
    const y = offset.top ? event.pageY - window.pageYOffset - offset.top : -1;

    console.log("offset x : " + offset.left);
    console.log("offset y : " + offset.top);
    console.log("point x : " + event.pageX);
    console.log("point y : " + event.pageY);
    console.log("scroll y : " + window.pageYOffset);
    console.log(x, y);
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
          left: `${item.coorX}px`,
          top: `${item.coorY}px`,
          background: "#8e8e8e66",
          color: "white",
          borderRadius: "4px",
          justifyContent: "center",
        }}
      >
        <h3 className={classes["stuff-title"]}>{item.name}</h3>
        <p className={classes["stuff-price"]}>{item.price}$</p>
        <a href={item.shopAddress}>go for shopping</a>
      </div>
    )
  );

  return (
    <div className={classes["img-frame"]} key={interiorDesignInfo.id}>
      <div className={classes.img}>
        <img
          onMouseOver={showStuffInfoHandler}
          onMouseOut={hideStuffInfoHandler}
          onClick={getCoordinatesHandler}
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
