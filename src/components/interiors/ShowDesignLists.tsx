import { Link, useNavigate } from "react-router-dom";
import classes from "./ShowDesignLists.module.css";

type designsObjects = {
  designs: {
    id: string;
    imgType: string;
    imgUrl: string;
    imgDesc: string;
    imgName: string;
    imgFeatures: string[];
  }[];
};

const ShowDesignLists = ({ designs }: designsObjects) => {
  const navigate = useNavigate();
  const lists: any = [];
  console.log(designs);

  for (const key in designs) {
    lists.push(
      <li key={key} onClick={() => navigate(`/interiors/${key}`)}>
        <div className={classes.type}>{designs[key].imgType}</div>
        <img src={designs[key].imgUrl} />
        <h4>{designs[key].imgName}</h4>
        <div className={classes.features}>
          {designs[key].imgFeatures?.map((feature) => (
            <span>{feature}</span>
          ))}
        </div>
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
      <ul>{lists}</ul>
    </div>
  );
};

export default ShowDesignLists;
