import React from "react";
import InputComponent from "../Defaults/Input/InputComponent";
import { useForm } from "react-hook-form";

const ProductForm = ({ close }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-4 py-4">
        {/* Product Name */}
        <div className="grid grid-cols-4 items-center gap-4">
          <InputComponent
            id={0}
            type="text"
            label={"Name"}
            defaultValue={"Samsung"}
            onChange={""}
            errors={errors}
            register={register}
          />
        </div>

        {/* Product Description */}
        <div className="grid grid-cols-4 items-center gap-4">
          <InputComponent
            id={0}
            type="text"
            label={"Description"}
            defaultValue={""}
            onChange={""}
            errors={errors}
            register={register}
          />
        </div>

        {/* Product Category */}
        <div className="grid grid-cols-4 items-center gap-4">
          <InputComponent
            id={0}
            type="text"
            label={"Cateogry"}
            defaultValue={""}
            onChange={""}
            errors={errors}
            register={register}
          />
        </div>

        {/* Product Price */}
        <div className="grid grid-cols-4 items-center gap-4">
          <InputComponent
            id={0}
            type="number"
            label={"Cateogry"}
            defaultValue={""}
            onChange={""}
            errors={errors}
            register={register}
          />
        </div>
      </div>
    </form>
  );
};

export default ProductForm;
