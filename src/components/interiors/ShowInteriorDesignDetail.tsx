import classes from "./ShowInteriorDesign.module.css";

import Card from "../layout/Card";

const ShowInteriorDesignDetail = (props: {
  imgInfo: {
    name: string;
    desc: string;
  };
  items: {
    name: string;
    price: number;
    desciption: string;
    shopAddress: string;
    coorX: number;
    coorY: number;
  }[];
}) => {
  const items = props.items;

  const itemLists: any = [];
  items.map((item) => {
    itemLists.push(
      <Card>
        <h3 className={classes["stuff-title"]}>{item.name}</h3>
        <p className={classes["stuff-price"]}>{item.price}$</p>
        <p className={classes["stuff-desc"]}>{item.desciption}</p>
        <a href={item.shopAddress}>go for shopping</a>
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
