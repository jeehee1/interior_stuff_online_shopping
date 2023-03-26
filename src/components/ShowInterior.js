import React, { useEffect, useRef } from "react";
import { useState } from "react";
import classes from "./ShowInterior.module.css";

const DUMMY_DATA = [
  {
    name: "mirror",
    price: 20,
    desciption: "ordinary mirror nothing special",
    coorX: 189,
    coorY: 156,
  },
  {
    name: "sofa",
    price: 100,
    desciption: "sofa that makes you comfortable",
    coorX: 213,
    coorY: 422,
  },
];

const ShowInterior = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [offset, setOffset] = useState({
    top: null,
    left: null,
    width: null,
    height: null,
  });
  const imgRef = useRef();

  useEffect(() => {}, [imgRef]);
  console.log(offset);

  const showStuffInfoHandler = () => {
    setShowInfo(true);
    const offset = imgRef.current.getBoundingClientRect();

    const curImgOffset = imgRef.current.getBoundingClientRect();
    setOffset({
      top: curImgOffset.top,
      left: curImgOffset.left,
      width: curImgOffset.width,
      height: curImgOffset.height,
    });
    console.log("imageoffset : " + offset);
  };

  const hideStuffInfoHandler = () => {
    setShowInfo(false);
    console.log("hide info");
  };

  //get coordinates when clicking at some point of the image.
  const getCoordinagesHandler = (event) => {
    event.preventDefault();
    // const offset = imgRef.current.getBoundingClientRect();
    // const x = Math.floor(((event.pageX - offset.left) / offset.width) * 100);
    // const y = Math.floor(((event.pageY - offset.top) / offset.height) * 100);
    const x = event.pageX - offset.left;
    const y = event.pageY - offset.top;
    console.log(x);
    console.log(y);
  };

  return (
    <div className={classes["img-frame"]}>
      <img
        onMouseOver={showStuffInfoHandler}
        onMouseOut={hideStuffInfoHandler}
        onClick={getCoordinagesHandler}
        src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
        alt="cannot load the image."
        ref={imgRef}
      />
      {showInfo && (
        <div
          onMouseOver={showStuffInfoHandler}
          onMouseOut={hideStuffInfoHandler}
          style={{
            position: "absolute",
            left: `${offset.left + DUMMY_DATA[0].coorX}px`,
            top: `${offset.top + DUMMY_DATA[0].coorY}px`,
            background: "#8e8e8e66",
            color: "white",
            borderRadius: "4px",
          }}
        >
          <h3 className={classes["stuff-title"]}>Mirror</h3>
          <p className={classes["stuff-price"]}>price: 30$</p>
          <p className={classes["stuff-desc"]}>
            description: Round shpaed mirror
          </p>
        </div>
      )}
      {showInfo && (
        <div
          onMouseOver={showStuffInfoHandler}
          onMouseOut={hideStuffInfoHandler}
          style={{
            position: "absolute",
            left: `${offset.left + DUMMY_DATA[1].coorX}PX`,
            top: `${offset.top + DUMMY_DATA[1].coorY}PX`,
            background: "#8e8e8e66",
            color: "white",
            borderRadius: "4px",
          }}
        >
          <h3 className={classes["stuff-title"]}>Sofa</h3>
          <p className={classes["stuff-price"]}>price: 200$</p>
          <p className={classes["stuff-desc"]}>
            description: sofa to make you comfortable
          </p>
        </div>
      )}
    </div>
  );
};

export default ShowInterior;
