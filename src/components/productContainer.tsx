import ProductSection from "./productsSection";
import useFetch from "../hooks/useFetch";

const ProductContainer = () => {
  const { data } = useFetch("http://localhost:3002/products");

  console.log(data);

  return <div className="flex p-4 md:border md:border-gray-300 justify-center rounded-md">{data && <ProductSection products={data} />}</div>;
};

export default ProductContainer;
