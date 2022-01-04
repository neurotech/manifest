import { Global } from "@emotion/react";
import { globalStyles } from "./globalStyles";
import styled from "@emotion/styled";
import { Stack } from "@neurotech/elements";
import products from "../mock/products.json";
import { Products } from "./Products/Products";

const Container = styled.div`
  padding: 1rem;
`;

export const App = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <Container>
        <Stack>
          <Products products={products} />
        </Stack>
      </Container>
    </>
  );
};
