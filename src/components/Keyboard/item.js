import { StyledButton } from "../Button/styles";
//import { ButtonProps } from "../types";
import "./styles.css";

export const Item = ({ char, image, onClick, width, height }) => (
  <StyledButton
    className={"Abutton"}
    color={"white"}
    width={width ? width : "60px"}
    height={height ? height : "40px"}
    stroke={"1px"}
    borderradius={"5px"}
    shadow={"none"}
    onClick={onClick}
  >
    <div>{char ? char : ""}</div>
    <div>{image ? <img src={image} width="50%" /> : ""}</div>
  </StyledButton>
);
