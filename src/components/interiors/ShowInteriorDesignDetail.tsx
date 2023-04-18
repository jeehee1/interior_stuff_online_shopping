import classes from "./ShowInteriorDesignDetail.module.css";

import Card from "../layout/Card";

const ShowInteriorDesignDetail = ({
  items,
}: {
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
  const itemLists: any = [];
  items.map((item) => {
    itemLists.push(
      <Card>
        <h3 className={classes["item-title"]}>{item.itemName}</h3>
        <p className={classes["item-price"]}>{item.itemPrice}$</p>
        <p className={classes["item-desc"]}>{item.itemDesc}</p>
        <a href={item.itemAddr} className={classes["item-addr"]}>
          Go to buy
        </a>
      </Card>
    );
  });

  return <div className={classes["interior-info"]}>{itemLists}</div>;
};

export default ShowInteriorDesignDetail;
