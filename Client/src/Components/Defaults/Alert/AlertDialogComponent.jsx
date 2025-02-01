import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
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
<<<<<<< HEAD
              This action will log you out of your account. Do you want to
              proceed?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={close} className="text-foreground">
=======
              <p>
                Are you sure you want to log out? This action will end your
                current session.
              </p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={close}
              className="text-foreground hover:bg-foreground hover:text-background"
            >
>>>>>>> e5520507322412f746fb3fbb0e0cb9c09e175c52
              Cancel
            </AlertDialogCancel>
            {/* The text "Proceed" has an if statement in dropdown.jsx component. Don't change it before understanding the code */}
            <AlertDialogAction onClick={close} className="hover:bg-zinc-800">
              Proceed
            </AlertDialogAction>{" "}
            {/* The text "Proceed" has an if statement in dropdown.jsx component. Don't change it before understanding the code */}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default AlertDialogComponent;
