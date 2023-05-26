import React from "react";
import { Product } from "../../../common/contexts/productsContext";

interface ProductItemProps {
  product: Product;
}

/**
 * Row with info about a product, such as name, price and sizes
 */
const ProductItem: React.FunctionComponent<ProductItemProps> = ({
  product,
}) => {
  return (
    <div>
      <span>{product.name}</span>
    </div>
  );
};

export default ProductItem;
