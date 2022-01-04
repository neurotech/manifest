import styled from "@emotion/styled";
import { Column, Columns, JustifyContent, Stack } from "@neurotech/elements";
import { useEffect } from "react";
import { Button } from "../Button";
import { CloseIcon } from "../icons/CloseIcon";
import { Product } from "./Products";
import { PurchaseDetails } from "./PurchaseDetails";

interface ProductDialogProps {
  product: Product;
  setActiveProduct: (product: Product) => void;
}

const ProductDialogContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  padding: 1rem;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.33);
`;

const ProductDialogBody = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 0.33rem;
  border: 2px solid black;
  z-index: 999;
`;

const StyledHeader = styled.div`
  font-weight: bold;
  font-size: 2rem;
`;

const Separator = styled.hr`
  height: 2px;
  border: none;
  background-color: silver;
`;

const StyledNotesHeader = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`;

const StyledNotes = styled.div`
  cursor: text;
  padding: 0.5rem;
  background-color: #fff5e3;
  border-radius: 0.33rem;
  border: 2px solid #ffce74;
  color: #553300;
`;

const StyledImage = styled.img`
  max-height: 10rem;
  max-width: 10rem;
  text-align: center;
  border-radius: 0.33rem;
  border: 1px solid silver;
  padding: 0.5rem;
`;

export const ProductDialog = ({
  product,
  setActiveProduct,
}: ProductDialogProps) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    event.key === "Escape" && setActiveProduct(null);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product]);
  return (
    <ProductDialogContainer>
      <ProductDialogBody>
        <Stack>
          <Columns
            alignItems="baseline"
            justifyContent={JustifyContent.SpaceBetween}
          >
            <Column>
              <StyledHeader>{product.name}</StyledHeader>
            </Column>

            <Columns alignItems="center">
              <Column>
                <PurchaseDetails product={product} />
              </Column>
              <Column>
                <Button
                  label={<CloseIcon />}
                  onClick={() => setActiveProduct(null)}
                />
              </Column>
            </Columns>
          </Columns>

          <Separator />

          <Columns justifyContent={JustifyContent.SpaceBetween}>
            <Column>
              <Stack flexGrow={1}>
                <StyledNotesHeader>{"Notes"}</StyledNotesHeader>
                <StyledNotes> {product.notes}</StyledNotes>

                {product.manual && (
                  <Button
                    label={"Manual"}
                    onClick={() =>
                      window.open(product.manual, "_blank").focus()
                    }
                  />
                )}
              </Stack>
            </Column>
            <Column>
              {product.images && (
                <Stack>
                  {product.images.map((image, index) => (
                    <StyledImage key={index} src={image} />
                  ))}
                </Stack>
              )}
            </Column>
          </Columns>
        </Stack>
      </ProductDialogBody>
    </ProductDialogContainer>
  );
};
