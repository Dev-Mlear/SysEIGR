import styled from "styled-components";

export const StyledButton = styled("button")`
  background: ${(p) => p.color || "#3426f8"};
  color: ${(p) => (p.text ? p.text : "#3426f8")};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: ${(p) => (p.stroke ? p.stroke : "2px")} solid
    ${(p) => (p.outline ? p.outline : "#3426f8")};
  border-radius: ${(p) => (p.borderradius ? p.borderradius : "45px")};
  padding: ${(p) => (p.padding ? p.padding : "5px 0")};
  cursor: pointer;
  max-width: ${(p) => (p.width ? p.width : "150px")};
  transition: all 0.3s ease-in-out;
  box-shadow: ${(p) =>
    p.shadow ? "none" : "0 16px 30px rgb(23 31 114 / 20%)"};
  height: ${(p) => (p.height ? p.height : "40px")};
  &:hover{
    color: ${(p) => (p.hovertext ? p.hovertext : "#fff")};
    border: ${(p) => (p.stroke ? p.stroke : "2px")} solid
      ${(p) => (p.hover ? p.hover : "#0684d8")};
    background-color: ${(p) => (p.hover ? p.hover : "#0684d8")};
  }
`;
