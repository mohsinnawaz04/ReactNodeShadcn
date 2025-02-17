import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectCategory() {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Category</SelectLabel>
          <SelectItem value="apple">Clothes</SelectItem>
          <SelectItem value="banana">Shoes</SelectItem>
          <SelectItem value="blueberry">Jackets</SelectItem>
          <SelectItem value="grapes">UnderGarments</SelectItem>
          <SelectItem value="pineapple">Chains</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
