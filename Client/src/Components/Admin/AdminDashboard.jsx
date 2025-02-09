import TableOfProducts from "./Products/TableOfProducts";
// import ProductsTable from "./ProductsTable";

const AdminDashboard = () => {
  return (
    <div className="container">
      <h1>Welcome to admin panel</h1>

      {/* Products Table */}
      <TableOfProducts />
      {/* Products Table */}
    </div>
  );
};

export default AdminDashboard;
