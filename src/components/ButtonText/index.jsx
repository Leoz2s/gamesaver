import { Container } from "./styles";

export function ButtonText({value, ...rest}) {
  return(
    <Container {...rest} >
      {value}
    </Container>
  );
};