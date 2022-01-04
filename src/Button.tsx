import styled from "@emotion/styled";

const StyledButton = styled.button`
  background-color: #ececec;
  color: black;
  font-weight: bold;
  border: 2px solid black;
  border-radius: 0.33rem;
  cursor: pointer;
  padding: 0;
  display: flex;
  padding: 0.33rem;
  justify-content: center;

  :hover {
    background-color: black;
    color: white;

    & svg {
      stroke: white;
      fill: white;
    }
  }
`;

interface ButtonProps {
  label: string | JSX.Element;
  onClick: () => void;
}

export const Button = ({ label, onClick }: ButtonProps) => (
  <StyledButton onClick={onClick}>{label}</StyledButton>
);
