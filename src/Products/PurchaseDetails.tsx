import styled from "@emotion/styled";
import { Product } from "./Products";

interface PurchaseDetailsProps {
  product: Product;
}

const StyledPurchaseDetails = styled.div`
  font-size: 1.5rem;
`;

export const PurchaseDetails = ({ product }: PurchaseDetailsProps) => (
  <StyledPurchaseDetails>
    <span>
      {`Purchased on ${new Date(product.purchaseDate).toDateString()}`} from{" "}
    </span>
    {product.purchaseLocation.url ? (
      <a href={product.purchaseLocation.url} target={"_blank"}>
        {product.purchaseLocation.name}
      </a>
    ) : (
      <span>{product.purchaseLocation.name}</span>
    )}
    <span>{` for $${product.price}`}</span>
  </StyledPurchaseDetails>
);
