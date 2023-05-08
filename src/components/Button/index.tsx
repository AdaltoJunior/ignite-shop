import { ComponentProps } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ComponentProps<typeof ButtonContainer> {}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <ButtonContainer {...props}>
      {children}
    </ButtonContainer>
  )
}