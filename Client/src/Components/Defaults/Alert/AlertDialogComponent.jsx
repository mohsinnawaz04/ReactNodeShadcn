import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const AlertDialogComponent = ({ open, close }) => {
  return (
    <>
      <AlertDialog open={open}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={close}>Cancel</AlertDialogCancel>
            {/* The text "Proceed" has an if statement in dropdown.jsx component. Don't change it before understanding the code */}
            <AlertDialogAction onClick={close}>Proceed</AlertDialogAction>{" "}
            {/* The text "Proceed" has an if statement in dropdown.jsx component. Don't change it before understanding the code */}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default AlertDialogComponent;
