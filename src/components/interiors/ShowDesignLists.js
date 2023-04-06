import { Link, useNavigate } from "react-router-dom";
import classes from "./ShowDesignLists.module.css";


const ShowDesignLists = (props) => {
  const navigate = useNavigate();
  const designs = props.designs;

  const lists = [];
  designs.map((data) => {
    lists.push(
      <li
        key={data.id}
        onClick={() => navigate(`/interiors/${data.info.id}`)}
      >
        <img src={data.imgUrl} />
        <h4>{data.imgName}</h4>
        <p>{data.imgDesc}</p>
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

export default ShowDesignLists;
