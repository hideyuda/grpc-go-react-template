
import { useEffect, useRef } from "react";

// Dropzone components
import Dropzone from "dropzone";

// Dropzone styles
import "dropzone/dist/dropzone.css";


import CustomBox from "components/Atomics/CustomBox";

// Custom styles for the CustomDropzone

// MUI context
import { useMaterialUIController } from "context";
import CustomDropzoneRoot from "./CustomDropzoneRoot";

// Declaring props types for CustomDropzone
interface Props {
  options: {
    [key: string | number]: any;
  };
}

function CustomDropzone({ options }: Props): JSX.Element {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const dropzoneRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    Dropzone.autoDiscover = false;

    function createDropzone() {
      return new Dropzone(dropzoneRef.current, { ...options });
    }

    function removeDropzone() {
      if (Dropzone.instances.length > 0) Dropzone.instances.forEach((dz: any) => dz.destroy());
    }

    createDropzone();

    return () => removeDropzone();
  }, [options]);

  return (
    <CustomDropzoneRoot
      onSubmit={(e) => e.preventDefault()}
      action="/"
      ref={dropzoneRef}
      className="form-control dropzone"
      ownerState={{ darkMode }}
    >
      <CustomBox className="fallback" bgColor="transparent">
        <input name="file" type="file" multiple />
      </CustomBox>
    </CustomDropzoneRoot>
  );
}

export default CustomDropzone;
