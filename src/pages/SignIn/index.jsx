import { Container } from "./styles";
import {Input} from "../../components/Input";

export function SignIn() {
  return(
    <Container>
      <h1>Hello Human!</h1>

      <Input id="email" labelText="Insert your e-mail" />
      <Input id="password" labelText="Insert your password" placeholder="Insert your password" />
    </Container>
  );
};