import ProductCard from "@/components/ProductCard";
import { TProduct } from "../page";

const AllProductpage = async () => {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });
  const products = await res.json();
  console.log(products);
  return (
    <div>
      <h1 className="text-4xl text-center font-bold">All products</h1>
      <div className="grid grid-cols-3 gap-8 w-[90%] mx-auto">
        {products?.map((product: TProduct) => (
          <ProductCard key={product?.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default AllProductpage;
