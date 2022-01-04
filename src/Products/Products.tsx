import { Column, Columns } from "@neurotech/elements";
import { useState } from "react";
import { ProductDialog } from "./ProductDialog";
import { ProductTile } from "./ProductTile";

export interface Product {
  id: number;
  images: string[];
  manual: string;
  name: string;
  notes: string;
  price: number;
  purchaseDate: string;
  purchaseLocation: PurchaseLocation;
  url: string;
}

interface PurchaseLocation {
  name: string;
  url?: string;
}

interface ProductsProps {
  products: Product[];
}

export const Products = ({ products }: ProductsProps) => {
  const [activeProduct, setActiveProduct] = useState<Product>();

  return (
    <>
      {activeProduct && (
        <ProductDialog
          product={activeProduct}
          setActiveProduct={setActiveProduct}
        />
      )}
      <Columns>
        {products.map((p, index) => (
          <Column key={index}>
            <ProductTile product={p} onClick={() => setActiveProduct(p)} />
          </Column>
        ))}
      </Columns>
    </>
  );
};
