import classes from "./RegisterDesignForm.module.css";
import { Form, useNavigate, redirect } from "react-router-dom";

const RegisterDesignForm = () => {
  const navigate = useNavigate();

  const cancelRegisterHandler = () => {
    navigate("..");
  };

  return (
    <>
      <Form method="POST">
        <div>
          <label htmlFor="type">Room Type</label>
          <select name="type" id="type" required>
            <option value="">--Please choose an option--</option>
            <option value="livingroom">Livingroom</option>
            <option value="kitchen">Kitchen</option>
            <option value="library">Library</option>
            <option value="bedroom">Bedroom</option>
            <option value="bathroom">Bathroom</option>
          </select>
        </div>
        <div className={classes.img}>
          <label htmlFor="url">Interior Design Image Url</label>
          <input id="url" name="url" type="text" required />
        </div>
        <div className={classes.name}>
          <label htmlFor="name">Interior Design Name</label>
          <input id="name" name="name" type="text" required />
        </div>
        <div className={classes.desc}>
          <label htmlFor="desc">Interior Design Description</label>
          <textarea id="desc" name="desc" required />
        </div>
        <button className={classes.btn} onClick={cancelRegisterHandler}>
          Cancel
        </button>
        <button className={classes.btn}>Save</button>
      </Form>
    </>
  );
};

export default RegisterDesignForm;

export const action = async ({ request }: { request: any }) => {
  const data = await request.formData();
  const designData = {
    imgName: data.get("name"),
    imgUrl: data.get("url"),
    imgDesc: data.get("desc"),
    imgType: data.get("type"),
  };
  const response = await fetch(
    "https://interior-design-392ca-default-rtdb.firebaseio.com/design.json",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(designData),
    }
  );
  return redirect(`/interiors`);
};
