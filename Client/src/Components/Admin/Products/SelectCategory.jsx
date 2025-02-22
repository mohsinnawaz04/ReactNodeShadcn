import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectCategory({ Controller, control }) {
  return (
    <Controller
      name="category"
      control={control}
      defaultValue=""
      rules={{ required: "Category is required" }} // Validation rule
      render={({ field }) => (
        <Select value={field.value} onValueChange={field.onChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Category</SelectLabel>
              <SelectItem value="clothes">Clothes</SelectItem>
              <SelectItem value="shoes">Shoes</SelectItem>
              <SelectItem value="jackets">Jackets</SelectItem>
              <SelectItem value="undergarments">UnderGarments</SelectItem>
              <SelectItem value="chains">Chains</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    />
  );
}
