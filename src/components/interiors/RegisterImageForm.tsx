import { useContext, useRef, useState } from "react";
import Select from "react-select";
import { DesignContext } from "../../store/design-context";
import DesignImg from "../../models/designimg";

const roomTypeOptions = [
  { value: "kitchen", label: "kitchen" },
  { value: "bedroom", label: "bedroom" },
  { value: "livingroom", label: "livingroom" },
  { value: "library", label: "library" },
  { value: "bathroom", label: "bathroom" },
];

// type AddImageFunc = {
//   onAddNewImage(type: string, name: string, desc: string, url: string): void;
// };

const RegisterImageForm = (props: { onNextStage: () => void }) => {
  const [selectedType, setSelectedType] = useState<{
    value: string;
    label: string;
  }>();

  const imgUrlRef = useRef<HTMLInputElement>(null!);
  const imgNameRef = useRef<HTMLInputElement>(null!);
  const imgDescRef = useRef<HTMLInputElement>(null!);

  const designCtx = useContext(DesignContext);

  const addNewDesignInfo = () => {
    console.log(
      selectedType?.value,
      imgUrlRef.current.value,
      imgNameRef.current.value,
      imgDescRef.current.value
    );

    const type = selectedType ? selectedType.value : "-";
    const name = imgNameRef.current.value;
    const desc = imgDescRef.current.value;
    const url = imgUrlRef.current.value;

    designCtx.addImage(new DesignImg(type, name, desc, url));
    props.onNextStage();
  };
  console.log(designCtx.interiorDesign);

  return (
    <>
      <form>
        <div>
          <label htmlFor="img-type">Room Type</label>
          <Select
            id="img-type"
            options={roomTypeOptions}
            value={selectedType}
            onChange={(type) => setSelectedType(type!)}
          />
        </div>
        <div>
          <label htmlFor="img-url">Interior Design Image Url</label>
          <input id="img-url" type="text" ref={imgUrlRef} />
        </div>
        <div>
          <label htmlFor="img-name">Interior Design Name</label>
          <input id="img-name" type="text" ref={imgNameRef} />
        </div>
        <div>
          <label htmlFor="img-desc">Interior Design Description</label>
          <input id="img-desc" type="text" ref={imgDescRef} />
        </div>
      </form>
      <button onClick={addNewDesignInfo}>Next</button>
    </>
  );
};

export default RegisterImageForm;
