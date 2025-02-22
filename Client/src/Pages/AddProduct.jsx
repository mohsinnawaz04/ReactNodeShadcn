import { Separator } from "../Components/ui/separator";
import { Input } from "../Components/ui/input";
import { Button } from "../Components/ui/button";
import { SelectCategory } from "../Components/Admin/Products/SelectCategory";
import { Textarea } from "../Components/ui/textarea";
import ShowImagePreview from "../Components/Admin/Products/ShowImagePreview";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { Package } from "lucide-react";
import { instance } from "../lib/axios";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      images: [],
      category: "", // Matches the defaultValue in SelectCategory
    },
  });

  function onSubmit(data) {
    console.log(data);

    postProductData(data);
  }

  const postProductData = async (data) => {
    try {
      const formData = new FormData();

      formData.append("category", data.category);
      formData.append("name", data.name);
      formData.append("price", data.price);
      formData.append("description", data.description);

      // Handle images: featuredImage (1st) and galleryImages (rest, max 4)
      if (data.images && data.images.length > 0) {
        formData.append("featuredImage", data.images[0]);

        if (data.images.length > 1) {
          const galleryImages = data.images.slice(1, 5); // Works for any length
          galleryImages.forEach((image) => {
            formData.append("galleryImages", image);
          });
        }
      }

      const response = await instance.post("/products/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Optional, Axios sets this automatically with FormData
        },
      });
      console.log("Response", response);
    } catch (err) {
      console.error(
        "Error while adding product to database:",
        err.response ? err.response.data : err.message
      );
    }
  };

  return (
    <form id="addProductForm" onSubmit={handleSubmit(onSubmit)} className="p-4">
      <h1 className="text-3xl font-bold mt-10">AddProduct</h1>

      <div className="grid grid-cols-12 mt-10 space-x-10">
        {/* Product Image */}
        <div className="col-span-4 border rounded-md">
          <h3 className="p-3">Product Image</h3>
          <Separator />

          {/* <div className="p-3 space-y-2">
            <h6 className="sub-heading text-sm">Tag</h6>
            <SelectTag control={control} Controller={Controller} />
            <span className="text-xs text-red-500 italic">
              {errors.tags?.message}
            </span>
          </div> */}

          <div className="mt-2 p-3 space-y-2">
            <h6 className="sub-heading text-sm">Product Image</h6>
            <ShowImagePreview
              Controller={Controller}
              control={control}
              name={"images"}
            />
            <span className="text-xs text-red-500 italic">
              {errors.images?.message}
            </span>
          </div>
        </div>

        {/* Product Info */}
        <div className="col-span-8 border rounded-md relative h-fit">
          <h3 className="p-3">Product Details</h3>
          <Separator />

          <div className="p-3 space-y-2">
            <h6 className="sub-heading text-sm">Product Name</h6>

            <Input
              placeholder="Ex: Bluetooth USB Adapter"
              {...register("name", { required: "Product name is required." })}
            />
            <span className="text-xs text-red-500 italic">
              {errors.name?.message}
            </span>
          </div>

          <div className="p-3 flex justify-between gap-5">
            <div className="flex-1 space-y-2">
              <h6 className="sub-heading text-sm">Product Price</h6>
              <Input
                type="number"
                min="1"
                max="2000"
                placeholder="Ex: 499"
                // onKeyDown={handleInputChange}
                {...register("price", { required: "Price is required." })}
              />
              <span className="text-xs text-red-500 italic">
                {errors.price?.message}
              </span>
              {/* {showInputError && (
                <p className="text-sm italic px-2 text-red-500">
                  * You can only enter numbers.
                </p>
              )} */}
            </div>

            <div className="flex-1 space-y-2">
              <h6 className="sub-heading text-sm">Product Category</h6>
              <SelectCategory Controller={Controller} control={control} />
              <span className="text-xs text-red-500 italic">
                {errors.category?.message}
              </span>
            </div>
          </div>

          <div className="p-3 space-y-2">
            <h6 className="sub-heading text-sm">Product Description</h6>
            <Textarea
              placeholder="Ex: Slim fit ready to wear jeans."
              rows="7"
              {...register("description", {
                required: "Description is required.",
              })}
            />
            <span className="text-xs text-red-500 italic">
              {errors.description?.message}
            </span>
          </div>
          <Button type="submit" className="m-3">
            <Package />
            Add Product
          </Button>
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
