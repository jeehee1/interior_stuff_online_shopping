import { Form, json, redirect, useParams } from "react-router-dom";
import classes from "./RegisterItemsForm.module.css";
import { useRef, useState } from "react";

const RegisterItemsForm = ({
  imgData,
}: {
  imgData: { url: string; id: string };
}) => {
  const imgRef = useRef<HTMLImageElement>(null);

  const [coordinates, setCoordinates] = useState<{
    coorX: number;
    coorY: number;
    width: number;
  }>({ coorX: 0, coorY: 0, width: 0 });

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

  const [display, setDisplay] = useState({ name: "", price: "" });

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
          {coordinates.width > 0 && (
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
        {coordinates.width > 0 && (
          <Form method="POST">
            <label htmlFor="name">Item Name</label>
            <input
              type="text"
              id="name"
              name="name"
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
              required
              onChange={(event) =>
                setDisplay({ ...display, price: event.currentTarget.value })
              }
            />
            <label htmlFor="desc">Item Description</label>
            <textarea id="desc" name="desc" required />
            <label htmlFor="addr">Item Shopping Address</label>
            <input type="text" id="addr" name="addr" />
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

export default RegisterItemsForm;

export const action = async ({
  request,
  params,
}: {
  request: any;
  params: any;
}) => {
  const id = params.designId;
  const data = await request.formData();
  const newItem = {
    itemName: data.get("name"),
    itemDesc: data.get("desc"),
    itemPrice: parseInt(data.get("price")),
    itemAddr: data.get("addr"),
    itemCoorX: parseInt(data.get("coor-x")),
    itemCoorY: parseInt(data.get("coor-y")),
  };
  const response = await fetch(
    `https://interior-design-392ca-default-rtdb.firebaseio.com/design/${id}/items.json`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    }
  );
  if (!response.ok) {
    throw json({ message: "Cannot save the item." }, { status: 500 });
  }
  return redirect(`/interiors/${id}`);
};
