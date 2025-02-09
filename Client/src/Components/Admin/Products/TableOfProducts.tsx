import { useEffect, useState } from "react";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import { useProducts } from "@/lib/Context/ProductsContext";
import { instance } from "@/lib/axios";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  const productsArray = await instance.get("/products/fetchAllProducts");
  return productsArray.data.data;

  // return [
  //   {
  //     _id: "213213",
  //     name: "GALAXY S9+",
  //     description: "Lorem 10",
  //     price: 999,
  //     category: "Mobile",
  //   },
  // ];
}

export default function TableOfProducts() {
  const [data, setData] = useState<Payment[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
