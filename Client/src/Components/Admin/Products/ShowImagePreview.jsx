import { useState } from "react";
import { Button } from "../../ui/button";
import { Upload } from "lucide-react";
import { FileUploader } from "react-drag-drop-files";
import DragDrop from "../../../hooks/dragDrop";

const ShowImagePreview = () => {
  return (
    <>
      {/* <Button>Select or drop Images</Button> */}
      <DragDrop />
    </>
  );
};

export default ShowImagePreview;
