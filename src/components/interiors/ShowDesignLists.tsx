import { Link, useNavigate } from "react-router-dom";
import classes from "./ShowDesignLists.module.css";

type designsObjects = {
  designs: {
    id: string;
    imgType: string;
    imgUrl: string;
    imgDesc: string;
    imgName: string;
  }[];
};

const ShowDesignLists = ({ designs }: designsObjects) => {
  const navigate = useNavigate();
  const lists: any = [];

  for (const key in designs) {
    lists.push(
      <li key={key} onClick={() => navigate(`/interiors/${key}`)}>
        <img src={designs[key].imgUrl} />
        <h4>{designs[key].imgName}</h4>
        <p>{designs[key].imgDesc}</p>
      </li>
    );
  }


  return (
    <div className={classes["interior-list"]}>
      <div className={classes.new}>
        <Link to="/interiors/new" className={classes.btn}>
          Register new Interior Design
        </Link>
      </div>
      <div className={classes.deploy}>
        <ul>{lists}</ul>
      </div>
    </div>
  );
};

export default ShowDesignLists;
