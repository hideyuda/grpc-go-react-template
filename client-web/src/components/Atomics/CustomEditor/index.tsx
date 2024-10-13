
// react-quill components
import ReactQuill from "react-quill";

// react-quill styles
import "react-quill/dist/quill.snow.css";

// Custom styles for the CustomEditor
import CustomEditorRoot from "components/Atomics/CustomEditor/CustomEditorRoot";

// MUI context
import { useMaterialUIController } from "context";

// declaring types for the CustomEditor
interface Props {
  [key: string]: any;
}

function CustomEditor(props: Props): JSX.Element {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <CustomEditorRoot ownerState={{ darkMode }}>
      {(<ReactQuill theme="snow" {...props} />) as any}
    </CustomEditorRoot>
  );
}

export default CustomEditor;
