import { SupplierForm } from "./components/category-form";

const SupplierPage = async ({ params }: { params: { supplierId: string } }) => {
  const supplier = null;
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SupplierForm initialData={supplier} />
      </div>
    </div>
  );
};

export default SupplierPage;
