import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { AlertDialogDescription } from "@radix-ui/react-alert-dialog";

const AlertDialogComponent = ({ open, close }) => {
  return (
    <>
      <AlertDialog open={open}>
        <AlertDialogContent className="bg-foreground text-background">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action will log you out of your account. Do you want to
              proceed?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={close} className="text-foreground">
              Cancel
            </AlertDialogCancel>
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
