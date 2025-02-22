import DragDrop from "../../../hooks/dragDrop";

const ShowImagePreview = ({ Controller, control, name }) => {
  return (
    <>
      {/* <Button>Select or drop Images</Button> */}
      <DragDrop Controller={Controller} control={control} name={"images"} />
    </>
  );
};

export default ShowImagePreview;
