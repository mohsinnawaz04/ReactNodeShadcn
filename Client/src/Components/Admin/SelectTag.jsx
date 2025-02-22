import { Controller } from "react-hook-form";
import Select from "react-select";

const options = [
  {
    label: "electronics",
    options: [
      { value: "laptop", label: "Laptop" },
      { value: "headphones", label: "Headphones" },
      { value: "smartphone", label: "Smartphone" },
    ],
  },
  {
    label: "furniture",
    options: [
      { value: "sofa", label: "Sofa" },
      { value: "table", label: "Table" },
      { value: "chair", label: "Chair" },
    ],
  },
  {
    label: "vehicles",
    options: [
      { value: "car", label: "Car" },
      { value: "bike", label: "Bike" },
      { value: "scooter", label: "Scooter" },
    ],
  },
];

const customStyles = {
  // Control (input area)
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "transparent", // Deep navy-like dark background
    borderColor: "#fff", // Cool gray border
    borderRadius: "7px",
    borderWidth: "1px",
    boxShadow: state.isFocused ? "0 0 0 1px #4a5568" : "none",
    color: "#fff",
    "&:hover": {
      borderColor: "#fff", // Lighter gray on hover
    },
    padding: "2px",
  }),

  // Placeholder
  placeholder: (provided) => ({
    ...provided,
    color: "#fff", // Light gray for placeholder
    fontSize: "14px",
  }),

  // Input text
  input: (provided) => ({
    ...provided,
    color: "#fff",
    fontSize: "14px",
  }),

  // Options in the dropdown
  option: (provided, state) => ({
    ...provided,
    backgroundColor: "#fff", // Darker blue-gray for options
    color: "#000",
    padding: "8px 12px",
    borderRadius: "5px",
    fontSize: "14px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#09090B", // Slightly lighter blue-gray on hover
      color: "#fff",
    },
    "&:active": {
      backgroundColor: "#2d3748",
    },
  }),

  // Dropdown menu container
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#fff", // Matches option background
    // border: "2px solid #4a5568", // Cool gray border
    borderRadius: "4px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    marginTop: "2px",
    padding: "5px",
  }),
  // Group headings (headers)
  groupHeading: (provided) => ({
    ...provided,
    color: "#000", // Black text for readability
    fontWeight: "600", // Bold for emphasis
    fontSize: "12px",
    textTransform: "uppercase", // Modern, clean look
    padding: "8px 12px",
    marginTop: "5px,",
  }),

  // Group container (optional refinement)
  group: (provided) => ({
    ...provided,
    padding: "0",
  }),

  // Multi-value tags (selected options)
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "transparent", // Transparent background as requested
    border: "1px solid #fff", // White border as requested
    borderRadius: "4px",
    padding: "2px",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "#fff", // White text for readability
    padding: "2px 6px",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "#fff",
    padding: "2px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#4a5568", // Cool gray for remove hover
      color: "#fff",
    },
  }),
};

const SelectTag = ({ Controller, control }) => (
  <Controller
    name="tags"
    control={control}
    defaultValue=""
    rules={{ required: "Tags are required." }}
    render={({ field }) => (
      <Select
        {...field}
        options={options}
        styles={customStyles}
        placeholder="Jeans, T-Shirt, Shirt"
        isMulti // Enable multi-select for tags
      />
    )}
  />
);

export default SelectTag;
