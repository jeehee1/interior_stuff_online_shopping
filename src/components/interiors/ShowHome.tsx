import { useNavigate } from "react-router-dom";
import classes from "./ShowHome.module.css";

const ShowHome = () => {
    const navigate = useNavigate()
  return (
    <div className={classes.home}>
      <h1 className={classes.title}>
        Look at other people's favorite interior designs and use them to
        inspire your own decorating style.
        <br/>Make your house reflect your unique personality.
      </h1>
      <button onClick={() => navigate('interiors')}>Browse through interior designs.</button>;
    </div>
  );
};

export default ShowHome;
