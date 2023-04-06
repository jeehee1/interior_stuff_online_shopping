import React, { useEffect, useRef } from "react";
import { useState } from "react";
import classes from "./ShowInteriors.module.css";
import Card from "../layout/Card";
import { useParams } from "react-router-dom";
import ShowInteriorsItems from "./ShowInteriorsDetail";
import SideNavigation from "../layout/SideNavigation";


const ShowInteriors = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  const [offset, setOffset] = useState({
    top: null,
    left: null,
    width: null,
    height: null,
  });

  const [textCoor, setTextCoor] = useState({
    textX: 0,
    textY: 0,
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
  const getCoordinagesHandler = (event) => {
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

  const interiorsInfo = props.info[0];
  console.log(interiorsInfo);

  const displayInfo = [];
  interiorsInfo.items.map((item) =>
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
    <div className={classes["img-frame"]} key={interiorsInfo.id}>
      <div className={classes.img}>
        <img
          onMouseOver={showStuffInfoHandler}
          onMouseOut={hideStuffInfoHandler}
          onClick={getCoordinagesHandler}
          src={interiorsInfo.imgUrl}
          alt="cannot load the image."
          ref={imgRef}
        />
        {showInfo && displayInfo}
      </div>
      <ShowInteriorsItems
        imgInfo={{ name: interiorsInfo.imgName, desc: interiorsInfo.imgDesc }}
        items={interiorsInfo.items}
      />
    </div>
  );
};

export default ShowInteriors;
