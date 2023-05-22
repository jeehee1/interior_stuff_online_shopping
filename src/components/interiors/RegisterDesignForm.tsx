import classes from "./RegisterDesignForm.module.css";
import { useEffect } from "react";
import {
  Form,
  useNavigate,
  redirect,
  json,
  useNavigation,
  useRouteLoaderData,
  Params,
} from "react-router-dom";
import { tokenLoader } from "../../util/auth";

const RegisterDesignForm = ({
  method,
  design,
}: {
  method: any;
  design: {
    imgName: string;
    imgUrl: string;
    imgDesc: string;
    imgType: string;
  } | null;
}) => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const token = useRouteLoaderData("root");
  useEffect(() => {
    if (!token) {
      alert("Please login first.");
      return navigate("/auth?mode=login");
    }
  }, [token]);

  const cancelRegisterHandler = () => {
    navigate("..");
  };

  return (
    <div className={classes.form}>
      <Form method={method}>
        <div>
          <label htmlFor="type">Room Type</label>
          <select
            name="type"
            id="type"
            required
            defaultValue={design ? design.imgType : "livingroom"}
          >
            <option value="livingroom">Livingroom</option>
            <option value="kitchen">Kitchen</option>
            <option value="library">Library</option>
            <option value="bedroom">Bedroom</option>
            <option value="bathroom">Bathroom</option>
          </select>
        </div>
        <div className={classes.img}>
          <label htmlFor="url">Interior Design Image Url</label>
          {design ? (
            <p>
              If you want to change Image, Please delete this design and
              register it again.
            </p>
          ) : (
            <input id="url" name="url" type="text" required />
          )}
        </div>
        <div className={classes.name}>
          <label htmlFor="name">Interior Design Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            defaultValue={design ? design.imgName : ""}
          />
        </div>
        <div className={classes.desc}>
          <label htmlFor="desc">Interior Design Description</label>
          <textarea
            id="desc"
            name="desc"
            required
            defaultValue={design ? design.imgDesc : ""}
          />
        </div>
        <div>
          {!isSubmitting && (
            <button className={classes.btn} onClick={cancelRegisterHandler}>
              Cancel
            </button>
          )}
          <button disabled={isSubmitting} className={classes.btn}>
            {isSubmitting ? "...sending" : "Save"}
          </button>
        </div>
      </Form>
      {!isSubmitting && design !== null && (
        <Form method="delete">
          <button className={classes["delete-btn"]}>Delete this design</button>
        </Form>
      )}
    </div>
  );
};

export default RegisterDesignForm;

export const action = async ({
  request,
  params,
}: {
  request: Request;
  params: Params;
}) => {
  const token = tokenLoader();
  if (token === null || token === "EXPIRED") {
    alert("Authentication failed. Pelase Login.");
    return redirect("/auth?mode=login");
  }
  const id = params.designId;
  const method = request.method;
  const data = await request.formData();
  let designData:
    | {
        uid: string;
        imgName: string;
        imgUrl: string;
        imgDesc: string;
        imgType: string;
      }
    | {
        imgName: string;
        imgDesc: string;
        imgType: string;
      }
    | null = {
    uid: token,
    imgName: `${data.get("name")}`,
    imgUrl: `${data.get("url")}`,
    imgDesc: `${data.get("desc")}`,
    imgType: `${data.get("type")}`,
  };

  let url = process.env.REACT_APP_FB_DATABASE_URL+'/design'

  if (method === "PATCH") {
    url =process.env.REACT_APP_FB_DATABASE_URL+`/design/${id}`
    designData = {
      imgName: `${data.get("name")}`,
      imgDesc: `${data.get("desc")}`,
      imgType: `${data.get("type")}`,
    };
  }
  if (method === "DELETE") {
    url =url =process.env.REACT_APP_FB_DATABASE_URL+`/design/${id}`
    designData = null;
  }
  const response = await fetch(url + ".json", {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(designData),
  });

  if (response.status === 422) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "Could not save design." }, { status: 500 });
  }
  if(method === 'PATCH') return redirect(`/interiors/${id}`)
  return redirect(`/interiors`);
};
