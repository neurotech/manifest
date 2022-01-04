import styled from "@emotion/styled";

const StyledSvg = styled.svg`
  width: 2rem;
  height: 2rem;
`;

export const CloseIcon = () => (
  <StyledSvg
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </StyledSvg>
);
