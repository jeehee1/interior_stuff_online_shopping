import classes from './NewInteriors.module.css'

const NewInteriors = () => {
  // const [{imgUrl: "", imgCoorX: null, items: []}] = useReducer();

  return (
    <div className={classes['new-interiors']}>
      <form>
        <div>
        <label id="type">Interiors Type</label>
        <input id="type" type="text" /></div><div>
        <label id="img">Image Url</label>
        <input id="img" type="text" /></div>

      </form>
      <button>Next</button>
    </div>
  );
};

export default NewInteriors;
