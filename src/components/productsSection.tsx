import { Products } from "../types"
import ProductCard from "./productCard"

const ProductSection = ({products}:{products:Products[]}) => {
  return (
    <div className="p-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" >
      {products.map(item => <ProductCard product={item} key={item.id}/>)}
    </div>
  )
}

export default ProductSection
