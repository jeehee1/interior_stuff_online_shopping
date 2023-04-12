import Item from "./items";
import DesignImg from "./designimg";
class Design {
  img: DesignImg;
  items: Item[];
  constructor(img: DesignImg, items: Item[]) {
    this.img = img;
    this.items = items;
  }
}

export default Design;
