import { Container } from "./styles";

export function Card({title, ...rest}) {
  return(
    <Container {...rest}>
      <img src="" alt="Game image" />

      <h3>{title}</h3>
    </Container>
  );
};