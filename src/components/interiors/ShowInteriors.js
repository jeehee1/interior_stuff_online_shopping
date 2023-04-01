import React, { useEffect, useRef } from "react";
import { useState } from "react";
import classes from "./ShowInteriors.module.css";
import Card from '../layout/Card'

const DUMMY_DATA = {
  imgUrl:
    "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
  items: [
    {
      name: "mirror",
      price: 20,
      desciption: "ordinary mirror nothing special",
      shopAddress: "Somewhere",
      coorX: 195,
      coorY: 165,
    },
    {
      name: "sofa",
      price: 100,
      desciption: "sofa that makes you comfortable",
      shopAddress: "gotoparchase",
      coorX: 213,
      coorY: 422,
    },
  ],
};

const ShowInteriors = () => {
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
    console.log(y);
  };

  return (
    <div className={classes["img-frame"]}>
      <div>
        <img
          onMouseOver={showStuffInfoHandler}
          onMouseOut={hideStuffInfoHandler}
          onClick={getCoordinagesHandler}
          src={DUMMY_DATA.imgUrl}
          alt="cannot load the image."
          ref={imgRef}
        />
        {showInfo && (
          <div
            onMouseOver={showStuffInfoHandler}
            onMouseOut={hideStuffInfoHandler}
            style={{
              position: "absolute",
              left: `${DUMMY_DATA.items[0].coorX}px`,
              top: `${DUMMY_DATA.items[0].coorY}px`,
              background: "#8e8e8e66",
              color: "white",
              borderRadius: "4px",
            }}
          >
            <h3 className={classes["stuff-title"]}>
              {DUMMY_DATA.items[0].name}
            </h3>
            <p className={classes["stuff-price"]}>
              {DUMMY_DATA.items[0].price}$
            </p>
            <a href={DUMMY_DATA.items[0].shopAddress}>go to parchase site</a>
          </div>
        )}
        {showInfo && (
          <div
            onMouseOver={showStuffInfoHandler}
            onMouseOut={hideStuffInfoHandler}
            style={{
              position: "absolute",
              left: `${DUMMY_DATA.items[1].coorX}px`,
              top: `${DUMMY_DATA.items[1].coorY}px`,
              background: "#8e8e8e66",
              color: "white",
              borderRadius: "4px",
            }}
          >
            <h3 className={classes["stuff-title"]}>
              {DUMMY_DATA.items[1].name}
            </h3>
            <p className={classes["stuff-price"]}>
              {DUMMY_DATA.items[1].price}$
            </p>
            <a href={DUMMY_DATA.items[1].shopAddress}>go to parchase site</a>
          </div>
        )}
      </div>
      <div className={classes['interior-info']}>
        <div>
            <p>image information : It's fancy living room.</p>
        </div>
        <Card>
          <h3 className={classes["stuff-title"]}>{DUMMY_DATA.items[0].name}</h3>
          <p className={classes["stuff-price"]}>{DUMMY_DATA.items[0].price}$</p>
          <p className={classes["stuff-desc"]}>
            {DUMMY_DATA.items[0].desciption}
          </p>
          <a href={DUMMY_DATA.items[0].shopAddress}>go to parchase site</a>
        </Card>
        <Card>
          <h3 className={classes["stuff-title"]}>{DUMMY_DATA.items[1].name}</h3>
          <p className={classes["stuff-price"]}>{DUMMY_DATA.items[1].price}$</p>
          <p className={classes["stuff-desc"]}>
            {DUMMY_DATA.items[1].desciption}
          </p>
          <a href={DUMMY_DATA.items[0].shopAddress}>go to parchase site</a>
        </Card>
      </div>
    </div>
  );
};

export default ShowInteriors;
