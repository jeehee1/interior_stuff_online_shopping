class Item {
  itemId: number;
  itemName: string;
  itemPrice: number;
  itemDesc: string;
  itemAddress: string;
  itemCoorX: number;
  itemCoorY: number;

  constructor(
    itemName: string,
    itemPrice: number,
    itemDesc: string,
    itemAddress: string,
    itemCoorX: number,
    itemCoorY: number
  ) {
    this.itemName = itemName;
    this.itemPrice = itemPrice;
    this.itemDesc = itemDesc;
    this.itemAddress = itemAddress;
    this.itemCoorX = itemCoorX;
    this.itemCoorY = itemCoorY;
    this.itemId = Math.floor(Math.random() * 100000);
  }
}

export default Item;
