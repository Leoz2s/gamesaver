import { Container, Form } from "./styles";
import {Input} from "../../components/Input";
import {ButtonText} from "../../components/ButtonText";
import {Button} from "../../components/Button";

export function SignIn() {
  return(
    <Container>
      <h1>Game Saver</h1>

      <Form>
        <Input id="email" 
          placeholder="Insert your e-mail"
        />
        <Input id="password" 
          placeholder="Insert your password" 
        />
        
        <Button value="Log In"></Button>
        <ButtonText value="Sign up" to="/register" />
      </Form>
    </Container>
  );
};