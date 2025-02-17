// components/AdminBreadcrumb.jsx
import { useLocation, Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/Components/ui/breadcrumb";

const getBreadcrumbLabel = (segment) => {
  const labels = {
    admin: "Dashboard",
    table: "Table",
    product: "Products",
  };
  return labels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
};

export function AdminBreadcrumb() {
  const location = useLocation();
  console.log(location);

  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment !== "" && segment !== "admin");

  const breadcrumbItems = pathSegments.map((segment, index) => {
    const href = `/admin/${pathSegments.slice(0, index + 1).join("/")}`;
    const isLast = index === pathSegments.length - 1;
    return { segment, href, isLast };
  });

  // Add Dashboard as the first item
  const allItems = [
    { segment: "admin", href: "/admin", isLast: false },
    ...breadcrumbItems,
  ];

  return (
    <Breadcrumb className="p-4">
      <BreadcrumbList>
        {allItems.map((item, index) => (
          <div
            key={item.href}
            style={{ display: "flex", alignItems: "center" }}
          >
            <BreadcrumbItem>
              {!item.isLast ? (
                <BreadcrumbLink asChild>
                  <Link to={item.href}>{getBreadcrumbLabel(item.segment)}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>
                  {getBreadcrumbLabel(item.segment)}
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {!item.isLast && <BreadcrumbSeparator />}
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
