import styled from "@emotion/styled";
import { Stack } from "@neurotech/elements";
import { Product } from "./Products";

interface ProductTileProps {
  onClick: () => void;
  product: Product;
}

const StyledTile = styled.div`
  background-color: white;
  border: 2px solid black;
  border-radius: 0.33rem;
  font-weight: bold;
  padding: 1rem;
  min-width: 20rem;
  cursor: pointer;

  :hover {
    border-color: #b367ff;
  }

  transition: border-color 0.15s;
`;

const StyledHeader = styled.div``;

const StyledImage = styled.img`
  max-height: 10rem;
  max-width: 10rem;
  text-align: center;
  border-radius: 0.33rem;
  border: 1px solid silver;
  padding: 0.5rem;
`;

export const ProductTile = ({ onClick, product }: ProductTileProps) => (
  <StyledTile onClick={onClick}>
    <Stack>
      <StyledHeader>{product.name}</StyledHeader>
      {product.images && <StyledImage src={product.images[0]} />}
    </Stack>
  </StyledTile>
);
