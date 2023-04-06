import React, { useRef } from "react";
import { useState } from "react";
import classes from "./ShowInteriorDesign.module.css";
import ShowInteriorsItems from "./ShowInteriorDesignDetail";


const ShowInteriorDesign = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  const [offset, setOffset] = useState({
    top: null,
    left: null,
    width: null,
    height: null,
  });

  const imgRef = useRef();

  // useEffect(() => {}, [imgRef]);
  // console.log(offset);

  const showStuffInfoHandler = () => {
    setShowInfo(true);

    const curImgOffset = imgRef.current.getBoundingClientRect();
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
  const getCoordinatesHandler = (event) => {
    event.preventDefault();
    const x = event.pageX - offset.left;
    const y = event.pageY - window.pageYOffset - offset.top;

    console.log("offset x : " + offset.left);
    console.log("offset y : " + offset.top);
    console.log("point x : " + event.pageX);
    console.log("point y : " + event.pageY);
    console.log("scroll y : " + window.pageYOffset);
    console.log(x, y);
  };

  const interiorDesignInfo = props.info[0];
  console.log(interiorDesignInfo);

  const displayInfo = [];
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
      <ShowInteriorsItems
        imgInfo={{ name: interiorDesignInfo.imgName, desc: interiorDesignInfo.imgDesc }}
        items={interiorDesignInfo.items}
      />
    </div>
  );
};

export default ShowInteriorDesign;
