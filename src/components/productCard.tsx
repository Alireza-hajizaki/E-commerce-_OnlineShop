import { Products } from "../types";

const ProductCard = ({ product }: { product: Products }) => {
  return (
    <div className="p-6 cursor-pointer border-b border-gray-500 w-[22rem] h-[10rem] md:w-[20rem] md:h-[20rem] md:border md:border-gray-300">
      <div className="flex flex-row justify-between md:flex md:flex-col md:items-center md:space-y-2">
        <div className="flex flex-col items-start space-y-2 md:items-center">
          <h3 className="font-serif">{product.name}</h3>
          <span className="text-sm text-red-500">{product.brand}</span>
          <span className="font-semibold">{product.price}</span>
        </div>
        <img
          src={product.image[0]}
          className="w-28 h-[8rem] md:w-44 md:h-[12rem]"
          alt="#"
        />
      </div>
    </div>
  );
};

export default ProductCard;
