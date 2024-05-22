import { Container } from "./styles";

export function Input({id, placeholder, ...rest}) {

  return(
    <Container {...rest}>
      <label htmlFor={id} className="sr-only" >{placeholder}</label>
      <input type="text" id={id} placeholder={placeholder} />
    </Container>
  );
};