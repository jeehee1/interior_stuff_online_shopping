import { Suspense } from "react";
import { Await, useRouteLoaderData } from "react-router-dom";
import RegisterDesignForm from "../components/interiors/RegisterDesignForm";
import Spinner from "../UI/Spinner";

const EditInteriorDesign = () => {
  const { design }: any = useRouteLoaderData("design-detail");
  return (
    <Suspense fallback={<Spinner />}>
      <Await resolve={design}>
        {(loadedDesign) => (
          <RegisterDesignForm
            method="patch"
            design={{
              imgName: loadedDesign.imgName,
              imgUrl: loadedDesign.imgUrl,
              imgDesc: loadedDesign.imgDesc,
              imgType: loadedDesign.imgType,
              imgFeatures: loadedDesign.imgFeatures,
            }}
          />
        )}
      </Await>
    </Suspense>
  );
};

export default EditInteriorDesign;
