import styled from "styled-components";

export const LeftContentSection = styled("section")`
  position: relative;
  padding: 0rem 2rem;
  @media only screen and (min-width: 768px) {
    margin: auto 15rem;
  }
`;

export const Title = styled("h6")`
  font-size: 2.5rem;
  font-weight: 700;
  color: #000000;
  margin: 1.5rem 0 2rem 0;
`;
export const ShortLine = styled("hr")`
  border: 4px solid #000000;
  width: 40px;
  color: black;
  opacity: 1;
  background-color: black;
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  max-width: 100%;
  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }
`;
