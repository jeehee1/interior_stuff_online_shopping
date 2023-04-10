import { useRef, useState } from "react";
import Select from "react-select";

const roomTypeOptions = [
  { value: "kitchen", label: "kitchen" },
  { value: "bedroom", label: "bedroom" },
  { value: "livingroom", label: "livingroom" },
  { value: "library", label: "library" },
  { value: "bathroom", label: "bathroom" },
];

type AddImageFunc = {
  onAddNewImage(type: string, name: string, desc: string, url: string): void;
};

const RegisterImageForm = ({ onAddNewImage }: AddImageFunc) => {
  const [selectedType, setSelectedType] = useState<{
    value: string;
    label: string;
  }>();
  const imgUrlRef = useRef<HTMLInputElement>(null!);
  const imgNameRef = useRef<HTMLInputElement>(null!);
  const imgDescRef = useRef<HTMLInputElement>(null!);

  const addNewDesignInfo = () => {
    console.log(
      selectedType?.value,
      imgUrlRef.current.value,
      imgNameRef.current.value,
      imgDescRef.current.value
    );
    onAddNewImage(
      selectedType!.value,
      imgNameRef.current.value,
      imgDescRef.current.value,
      imgUrlRef.current.value
    );
  };

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
