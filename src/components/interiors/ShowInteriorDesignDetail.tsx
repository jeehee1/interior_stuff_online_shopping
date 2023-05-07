import classes from "./ShowInteriorDesignDetail.module.css";

import Card from "../layout/Card";
import { Form, useNavigate } from "react-router-dom";

const ShowInteriorDesignDetail = ({
  design,
  items,
  showEditBtn,
}: {
  design: {
    id: string;
    imgType: string;
    imgName: string;
    imgDesc: string;
    imgUrl: string;
  };
  items: {
    itemId: string;
    itemName: string;
    itemPrice: number;
    itemDesc: string;
    itemAddr: string;
    itemCoorX: number;
    itemCoorY: number;
  }[];
  showEditBtn: boolean;
}) => {
  const navigate = useNavigate();
  const itemLists: any = [];
  items.map((item) => {
    itemLists.push(
      <Card>
        <div className={classes.item}>
          <h3 className={classes["item-title"]}>{item.itemName}</h3>
          <p className={classes["item-price"]}>{item.itemPrice}$</p>
          <p className={classes["item-desc"]}>{item.itemDesc}</p>
          <a href={item.itemAddr} className={classes["item-addr"]}>
            Go to buy
          </a>
          {showEditBtn && (
            <div>
              <button onClick={() => navigate(`${item.itemId}/edit`)}>
                edit
              </button>
            </div>
          )}
        </div>
      </Card>
    );
  });

  return (
    <div className={classes["interior-info"]}>
      <h4 className={classes.title}>Item Lists</h4>
      {itemLists}
    </div>
  );
};

export default ShowInteriorDesignDetail;
