import ProductSection from "./productsSection";
import useFetch from "../hooks/useFetch";

const ProductContainer = () => {
  const { data } = useFetch("http://localhost:3002/products");

  console.log(data);

  return <div className="p-4 pr-8 md:border md:border-gray-300 rounded-md">{data && <ProductSection products={data} />}</div>;
};

export default ProductContainer;
