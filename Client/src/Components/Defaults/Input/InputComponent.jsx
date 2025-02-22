import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";

const InputComponent = ({
  id,
  label,
  defaultValue,
  onChange,
  register,
  errors,
  className = "col-span-3",
  type = "text",
}) => {
  return (
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor={id} className="text-right">
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        defaultValue={defaultValue}
        onChange={onChange && onChange}
        className={className}
        {...register(id, {
          required: { value: true, message: `${label} is required` },
        })}
      />
      {errors[id] && (
        <span className="text-red-500 text-sm italic">
          {errors[id].message}
        </span>
      )}
    </div>
  );
};

export default InputComponent;
