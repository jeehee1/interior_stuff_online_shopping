import classes from "./ShowInteriorDesign.module.css";

import Card from "../layout/Card";

const ShowInteriorDesignDetail = (props) => {
  const imgInfo = props.imgInfo;
  const items = props.items;

  const itemLists = [];
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
        <p>{imgInfo.desc}</p>
      </div>
      {itemLists}
    </div>
  );
};

export default ShowInteriorDesignDetail;
