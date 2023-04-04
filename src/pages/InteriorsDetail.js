import { useParams } from "react-router-dom";
import ShowInteriors from "../components/interiors/ShowInteriors";

const InteriorsDetailPage = () => {
  const params = useParams();

  return (
    <>
      <p>{params.interiorsId}</p>
      <ShowInteriors />
    </>
  );
};

export default InteriorsDetailPage;
