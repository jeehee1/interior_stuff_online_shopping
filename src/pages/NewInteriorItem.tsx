import { Await, useParams, useRouteLoaderData } from "react-router-dom";
import RegisterItemsForm from "../components/interiors/RegisterItemForm";
import { Suspense } from "react";

const NewInteriorItem = () => {
  const { designId } = useParams();
  const { design }: any = useRouteLoaderData("design-detail");

  return (
    <Suspense>
      <Await resolve={design}>
        {(loadedDesign) => (
          <RegisterItemsForm
            imgData={{ url: loadedDesign.imgUrl, id: designId! }}
            item={null}
            method="POST"
          />
        )}
      </Await>
    </Suspense>
  );
};

export default NewInteriorItem;
