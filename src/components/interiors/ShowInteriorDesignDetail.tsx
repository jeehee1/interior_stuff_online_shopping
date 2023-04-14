import classes from "./ShowInteriorDesign.module.css";

import Card from "../layout/Card";

const ShowInteriorDesignDetail = (props: {
  items: {
    itemId: number;
    itemName: string;
    itemPrice: number;
    itemDesc: string;
    itemAddress: string;
    itemCoorX: number;
    itemCoorY: number;
  }[];
  imgInfo: {
    name: string;
    desc: string;
  };
}) => {
  const items = props.items;

  const itemLists: any = [];
  items.map((item) => {
    itemLists.push(
      <Card>
        <h3 className={classes["stuff-title"]}>{item.itemName}</h3>
        <p className={classes["stuff-price"]}>{item.itemPrice}$</p>
        <p className={classes["stuff-desc"]}>{item.itemDesc}</p>
        <a href={item.itemAddress}>go for shopping</a>
      </Card>
    );
  });

  return (
    <div className={classes["interior-info"]}>
      <div>
        <h4>{props.imgInfo.name}</h4>
        <p>{props.imgInfo.desc}</p>
      </div>
      {itemLists}
    </div>
  );
};

export default ShowInteriorDesignDetail;
