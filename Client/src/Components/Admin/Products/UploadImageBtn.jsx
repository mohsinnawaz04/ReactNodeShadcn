import { Upload } from "lucide-react";

const UploadImageBtn = ({ files, handleFileInput }) => {
  return (
    <label className="cursor-pointer block w-fit">
      <input
        type="file"
        accept=".jpg,.png,.gif"
        multiple
        onChange={handleFileInput}
        className="hidden"
      />
      <div className="text-white px-4 py-2 flex items-center gap-3 rounded-md text-center w-fit text-sm bg-zinc-900">
        <Upload size={17} />
        {files.length > 0 ? "Add another image" : "Upload image"}
      </div>
    </label>
  );
};

export default UploadImageBtn;
