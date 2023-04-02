import { Link } from "react-router-dom";
import classes from "./InteriorLists.module.css";

const DUMMY_DATA = [
  {
    type: "livingroom",
    info: {
      id: 1,
      imgType: "livingroom",
      imgName: "fancy living room",
      imgDesc: "Living room which has wonderful well designed furnitures.",
      imgUrl:
        "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
      items: [
        {
          name: "mirror",
          price: 20,
          desciption: "ordinary mirror nothing special",
          shopAddress: "Somewhere",
          coorX: 189,
          coorY: 156,
        },
        {
          name: "sofa",
          price: 100,
          desciption: "sofa that makes you comfortable",
          shopAddress: "gotoparchase",
          coorX: 213,
          coorY: 422,
        },
      ],
    },
  },
  {
    type: "kitchen",
    info: {
      id: 2,
      imgType: "kitchen",
      imgName: "fancy kitchen",
      imgDesc: "kitchen which has wonderful well designed furnitures.",
      imgUrl:
        "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      items: [
        {
          name: "light",
          price: 50,
          desciption: "ordinary light",
          shopAddress: "Somewhere",
          coorX: 189,
          coorY: 156,
        },
        {
          name: "gasstove",
          price: 700,
          desciption: "gas stove, It's working well.",
          shopAddress: "gotoparchase",
          coorX: 213,
          coorY: 422,
        },
      ],
    },
  },
  {
    type: "library",
    info: {
      id: 3,
      imgType: "library",
      imgName: "fancy library",
      imgDesc: "home library which has wonderful well designed furnitures.",
      imgUrl:
        "https://images.unsplash.com/photo-1593670755950-603e1d6184b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=763&q=80",
      items: [
        {
          name: "bookcase",
          price: 5000,
          desciption: "large bookcase",
          shopAddress: "Somewhere",
          coorX: 189,
          coorY: 156,
        },
        {
          name: "booklight",
          price: 700,
          desciption: "light, It's good for reading.",
          shopAddress: "gotoparchase",
          coorX: 213,
          coorY: 422,
        },
      ],
    },
  },
];

const InteriorLists = () => {
  const lists = [];
  DUMMY_DATA.map((data) => {
    lists.push(
      <li key={data.info.id}>
        <img src={data.info.imgUrl} />
        <h4>{data.info.imgName}</h4>
        <p>{data.info.imgDesc}</p>
      </li>
    );
  });

  return (
    <div className={classes["interior-list"]}>
      <Link to="/interiors/new" className={classes.btn}>
        Register new Interior Design
      </Link>
      <ul>{lists}</ul>
    </div>
  );
};

export default InteriorLists;
