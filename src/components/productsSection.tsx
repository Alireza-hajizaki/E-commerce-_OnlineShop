import { Products } from "../types"
import ProductCard from "./productCard"

const ProductSection = ({products}:{products:Products[]}) => {
  return (
    <div className="flex flex-col space-y-4 md:flex-row md:flex-wrap md:space-y-0
    md:gap-6 md:justify-center" >
      {products.map(item => <ProductCard product={item} key={item.id}/>)}
    </div>
  )
}

export default ProductSection
