import { StyledButton } from "./styles";
//import { ButtonProps } from "../types";

export const Button = ({
  outline,
  hover,
  hovertext,
  text,
  color,
  fixedWidth,
  children,
  width,
  stroke,
  borderradius,
  padding,
  shadow,
  onClick,
}) => (
  <StyledButton
    color={color}
    shadow={shadow}
    outline={outline}
    stroke={stroke}
    text={text}
    hover={hover}
    hovertext={hovertext}
    fixedWidth={fixedWidth}
    borderradius={borderradius}
    padding={padding}
    onClick={onClick}
    width={width}
  >
    {children}
  </StyledButton>
);
