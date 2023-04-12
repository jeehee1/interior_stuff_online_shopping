import Item from "../../models/items";
import { DesignContext } from "../../store/design-context";
import classes from "./RegisterItemsForm.module.css";
import { useContext, useEffect, useRef, useState } from "react";

const RegisterItemsForm = (props: { onNextStage: () => void }) => {
  const designCtx = useContext(DesignContext);
  const img = designCtx.interiorDesign.img;

  const imgRef = useRef<HTMLImageElement>(null);

  const [caption, setCaption] = useState(true);

  const [itemInfo, setItemInfo] = useState<{ name: string; price: number }>({
    name: "",
    price: 0,
  });

  const [coordinates, setCoordinates] = useState<{
    coorX: number;
    coorY: number;
  }>({ coorX: 0, coorY: 0 });

  const addItemHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setCaption(false);
    const curImgOffset = imgRef.current!.getBoundingClientRect();
    const x = event.pageX - window.pageXOffset - curImgOffset.left;
    const y = event.pageY - window.pageYOffset - curImgOffset.top;

    setCoordinates({
      coorX: x,
      coorY: y,
    });
  };

  const descRef = useRef<HTMLTextAreaElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const itemFormRef = useRef<HTMLFormElement>(null);

  const newItemHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    const newItem = {
      name: itemInfo.name,
      price: itemInfo.price,
      desc: descRef.current?.value || "",
      address: addressRef.current?.value || "",
      coorX: coordinates!.coorX,
      coorY: coordinates!.coorY,
    };

    designCtx.addItems([
      ...designCtx.interiorDesign.items,
      new Item(
        newItem.name,
        newItem.price,
        newItem.desc,
        newItem.address,
        newItem.coorX,
        newItem.coorY
      ),
    ]);
    itemFormRef.current?.reset();
    setItemInfo({ name: "", price: 0 });
    setCoordinates({ coorX: 0, coorY: 0 });
  };
  const [showItemsComp, setShowItesmsComp] = useState();

  useEffect(() => {
    let showItems: any = [];
    designCtx.interiorDesign.items.map((item) => {
      showItems.push(
        <div
          key={item.itemId}
          style={{
            position: "absolute",
            left: `${item.itemCoorX}px`,
            top: `${item.itemCoorY}px`,
            background: "#8e8e8e66",
            color: "white",
            borderRadius: "4px",
          }}
        >
          <h4 className={classes["stuff-title"]}>{item.itemName}</h4>
          <p
            className={classes["stuff-price"]}
          >{`price: ${item.itemPrice}$`}</p>
          <p className={classes["stuff-desc"]}>shopping mall</p>
        </div>
      );
    });
    setShowItesmsComp(showItems);
  }, [designCtx.interiorDesign]);

  const saveDesignHandler = () => {
    console.log(designCtx.interiorDesign);
    designCtx.resetDesign();
    props.onNextStage();
  };

  return (
    <>
      {designCtx.interiorDesign.items.length > 0 && coordinates.coorX === 0 && (
        <div>
          <p>If you want to add new item. Please click the image.</p>
          <button onClick={saveDesignHandler}>Save</button>
        </div>
      )}
      <div className={classes.register}>
        {caption && (
          <div className={classes.caption}>
            <p>click the location in image to display an item description.</p>
          </div>
        )}
        <img
          className={classes.image}
          src={designCtx.interiorDesign.img.imgUrl}
          ref={imgRef}
          onClick={addItemHandler}
        />
        {showItemsComp}
        {coordinates!.coorX > 0 || coordinates!.coorY > 0 ? (
          <div
            style={{
              position: "absolute",
              left: `${coordinates.coorX}px`,
              top: `${coordinates.coorY}px`,
              background: "#8e8e8e66",
              color: "white",
              borderRadius: "4px",
            }}
          >
            <h4 className={classes["stuff-title"]}>
              {itemInfo.name || "Item name"}
            </h4>
            <p className={classes["stuff-price"]}>{`price: ${
              itemInfo.price || "-"
            }$`}</p>
            <p className={classes["stuff-desc"]}>shopping mall</p>
          </div>
        ) : null}
        {(coordinates!.coorX > 0 || coordinates!.coorY > 0) && (
          <>
            <form ref={itemFormRef}>
              <label>Item Name</label>
              <input
                type="text"
                onChange={(event) =>
                  setItemInfo({ ...itemInfo, name: event.currentTarget.value })
                }
              />
              <label>Item Price</label>
              <input
                type="text"
                onChange={(event) =>
                  setItemInfo({
                    ...itemInfo,
                    price: parseInt(event.currentTarget.value),
                  })
                }
              />
              <label>Item Description</label>
              <textarea ref={descRef} />
              <label>Item Shopping Address</label>
              <input type="text" ref={addressRef} />
              <button onClick={newItemHandler}>Add Another Item</button>
              <button>cancel add current Item</button>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default RegisterItemsForm;
