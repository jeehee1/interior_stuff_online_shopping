import { Form, json, redirect, useParams } from "react-router-dom";
import classes from "./RegisterItemForm.module.css";
import { useRef, useState } from "react";

const RegisterItemForm = ({
  method,
  imgData,
  item,
}: {
  method: any;
  imgData: { url: string; id: string };
  item: {
    itemId: string;
    itemName: string;
    itemPrice: number;
    itemDesc: string;
    itemAddr: string;
    itemCoorX: number;
    itemCoorY: number;
  } | null;
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  console.log(item);

  const [coordinates, setCoordinates] = useState<{
    coorX: number;
    coorY: number;
    width: number;
  }>({
    coorX: item ? item.itemCoorX : 0,
    coorY: item ? item.itemCoorY : 0,
    width: 0,
  });

  const addItemHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    const curImgOffset = imgRef.current!.getBoundingClientRect();
    const x = event.pageX - window.pageXOffset - curImgOffset.left;
    const y = event.pageY - window.pageYOffset - curImgOffset.top;

    setCoordinates({
      coorX: x,
      coorY: y,
      width: curImgOffset.width,
    });
  };
  console.log(coordinates.coorX, coordinates.coorY);

  const itemFormRef = useRef<HTMLFormElement>(null);

  const [display, setDisplay] = useState({
    name: item ? item.itemName : "",
    price: item ? item.itemPrice : 0,
  });

  return (
    <div className={classes["add-item"]}>
      <div>
        <p>Click the iamge and add item information where you want!</p>
        <div className={classes.register}>
          <img
            className={classes.image}
            src={imgData.url}
            alt="Cannot find an image. Please check image URLs again."
            ref={imgRef}
            onClick={addItemHandler}
          />
          {coordinates.coorX > 0 && coordinates.coorY > 0 && (
            <div
              style={{
                position: "absolute",
                left: `${coordinates.coorX}px`,
                top: `${coordinates.coorY}px`,
                padding: `0.2rem 0.5rem`,
                background: "#8e8e8e66",
                color: "white",
                borderRadius: "4px",
              }}
            >
              <h4 className={classes["stuff-title"]}>Item : {display.name}</h4>
              <p className={classes["stuff-price"]}>price: {display.price}$</p>
            </div>
          )}
        </div>
      </div>
      <div className={classes["item-form"]}>
        {(coordinates.width > 0 || item !== null) && (
          <Form method={method}>
            <label htmlFor="name">Item Name</label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={item ? item.itemName : ""}
              autoFocus={true}
              onChange={(event) =>
                setDisplay({ ...display, name: event.currentTarget.value })
              }
            />
            <label htmlFor="price">Item Price</label>
            <input
              type="text"
              id="price"
              name="price"
              defaultValue={item ? item.itemPrice : ""}
              required
              onChange={(event) =>
                setDisplay({
                  ...display,
                  price: parseInt(event.currentTarget.value),
                })
              }
            />
            <label htmlFor="desc">Item Description</label>
            <textarea
              id="desc"
              name="desc"
              defaultValue={item ? item.itemDesc : ""}
              required
            />
            <label htmlFor="addr">Item Shopping Address</label>
            <input
              type="text"
              id="addr"
              name="addr"
              defaultValue={item ? item.itemAddr : ""}
            />
            <input
              type="text"
              id="coor-x"
              name="coor-x"
              value={coordinates.coorX}
              hidden
              readOnly
            />
            <input
              type="text"
              id="coor-y"
              name="coor-y"
              value={coordinates.coorY}
              hidden
              readOnly
            />
            <button>Save current Item</button>
          </Form>
        )}
      </div>
    </div>
  );
};

export default RegisterItemForm;

export const action = async ({
  request,
  params,
}: {
  request: any;
  params: any;
}) => {
  const { designId, itemId } = params;
  const { method } = request;
  const data = await request.formData();
  const newItem = {
    itemName: data.get("name"),
    itemDesc: data.get("desc"),
    itemPrice: parseInt(data.get("price")),
    itemAddr: data.get("addr"),
    itemCoorX: parseInt(data.get("coor-x")),
    itemCoorY: parseInt(data.get("coor-y")),
  };
  let url = `https://interior-design-392ca-default-rtdb.firebaseio.com/design/${designId}/items.json`;
  if (method === "PATCH") {
    url = `https://interior-design-392ca-default-rtdb.firebaseio.com/design/${designId}/items/${itemId}.json`;
  }

  const response = await fetch(url, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newItem),
  });
  if (!response.ok) {
    throw json({ message: "Cannot save the item." }, { status: 500 });
  }
  return redirect(`/interiors/${designId}`);
};
