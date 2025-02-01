import { LoaderCircle } from "lucide-react";

const LoaderComponent = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <LoaderCircle size={80} className="animate-spin" />
    </div>
  );
};

export default LoaderComponent;
