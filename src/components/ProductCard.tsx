import { TProduct } from "@/app/page";
import Image from "next/image";

const ProductCard = ({ product }: { product: TProduct }) => {
  console.log(product);
  return (
    <div
      key={product.id}
      className="max-w-sm rounded-2xl overflow-hidden shadow-lg border bg-white"
    >
      <Image
        src={product?.image}
        alt={product?.productName}
        width={500}
        height={500}
      />

      <div className="p-5 space-y-3">
        <span className="inline-block bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
          {product?.category}
        </span>

        <h2 className="text-xl font-semibold text-gray-800">
          {product?.productName}
        </h2>

        <p className="text-lg font-bold text-blue-600">৳{product?.price}</p>

        <button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-xl transition">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
