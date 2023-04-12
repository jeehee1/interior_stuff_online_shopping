class DesignImg {
  imgId: number;
  imgType: string;
  imgName: string;
  imgDesc: string;
  imgUrl: string;
  constructor(type: string, name: string, desc: string, url: string) {
    this.imgId = Math.floor(Math.random() * 100000);
    this.imgType = type;
    this.imgName = name;
    this.imgDesc = desc;
    this.imgUrl = url;
  }
}

export default DesignImg;
