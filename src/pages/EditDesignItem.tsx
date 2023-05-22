import { Await, useParams, useRouteLoaderData } from "react-router-dom";
import RegisterItemForm from "../components/interiors/RegisterItemForm";
import { Suspense } from "react";
import Spinner from "../UI/Spinner";

const EditDesignItem = () => {
  const { designId, itemId } = useParams();
  const { design }: any = useRouteLoaderData("design-detail");
  return (
    <Suspense fallback={<Spinner />}>
      <Await resolve={design}>
        {(loadedDesign) => (
          <RegisterItemForm
            method="PATCH"
            imgData={{ url: loadedDesign.imgUrl, id: `${designId}` }}
            item={loadedDesign.items[`${itemId}`]}
          />
        )}
      </Await>
    </Suspense>
  );
};

export default EditDesignItem;
