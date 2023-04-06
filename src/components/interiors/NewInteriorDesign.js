import classes from "./NewInteriorDesign.module.css";

const NewInteriorDesign = () => {
  // const [{imgUrl: "", imgCoorX: null, items: []}] = useReducer();

  return (
    <div className={classes["new-design"]}>
      <form>
        <div>
          <label id="type">Room Type</label>
          <input id="type" type="text" />
        </div>
        <div>
          <label id="img">Interior Design Image Url</label>
          <input id="img" type="text" />
        </div>
      </form>
      <button>Next</button>
    </div>
  );
};

export default NewInteriorDesign;
