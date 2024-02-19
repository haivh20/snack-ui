import { CustomerForm } from "./components/customer-form";

const CategoryPage = async ({ params }: { params: { categoryId: string } }) => {
  const category = null;
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CustomerForm initialData={category} />
      </div>
    </div>
  );
};

export default CategoryPage;
