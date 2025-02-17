import { Upload } from "lucide-react";
import { Button } from "../../ui/button";

const UploadImageBtn = ({ text }) => {
  return (
    <Button className="hover:bg-zinc-700/40 active:bg-zinc-700/20">
      <Upload /> {text}
    </Button>
  );
};

export default UploadImageBtn;
