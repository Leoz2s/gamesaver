import { Container } from "./styles";

export function Input({id, labelText, placeholder, ...rest}) {

  return(
    <Container {...rest}>
      <label htmlFor={id} className="sr-only" >{labelText}</label>
      <input type="text" id={id} placeholder={placeholder} />
    </Container>
  );
};