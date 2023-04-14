import { Link, useNavigate } from "react-router-dom";
import classes from "./ShowDesignLists.module.css";

type designsObjects = {
  designs: {
    id: number;
    imgUrl: string;
    imgDesc: string;
    imgName: string;
  }[];
};

const ShowDesignLists = ({ designs }: designsObjects) => {
  const navigate = useNavigate();

  const lists: any = [];
  designs.map(
    (data: {
      id: number;
      imgUrl: string;
      imgName: string;
      imgDesc: string;
    }) => {
      lists.push(
        <li key={data.id} onClick={() => navigate(`/interiors/${data.id}`)}>
          <img src={data.imgUrl} />
          <h4>{data.imgName}</h4>
          <p>{data.imgDesc}</p>
        </li>
      );
    }
  );

  return (
    <div className={classes["interior-list"]}>
      <Link to="/interiors/new" className={classes.btn}>
        Register new Interior Design
      </Link>
      <div className={classes.deploy}>
      <ul>{lists}</ul>
      </div>
    </div>
  );
};

export default ShowDesignLists;
