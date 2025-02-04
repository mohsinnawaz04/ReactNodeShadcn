import ButtonComponent from "../Defaults/Button/ButtonComponent";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import ProductForm from "./ProductForm";

const AddProductDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    console.log("opened");
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
    console.log("dialog has been closed");
  };
  return (
    <>
      <ButtonComponent onClick={openDialog}>Add Product</ButtonComponent>
      <Dialog open={isOpen} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Add Product</DialogTitle>
          </DialogHeader>
          <ProductForm close={closeDialog} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddProductDialog;
