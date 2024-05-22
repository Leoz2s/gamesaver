import { Container, Form } from "./styles";
import {Input} from "../../components/Input";
import {ButtonText} from "../../components/ButtonText";
import {Button} from "../../components/Button";

import { Link } from "react-router-dom";

export function SignUp() {
  return(
    <Container>
      <h1>Game Saver</h1>

      <Form>
        <Input id="name" 
          placeholder="Insert your name" 
        />
        <Input id="email" 
          placeholder="Insert your e-mail"
        />
        <Input id="password" 
          placeholder="Insert your password" 
        />
        
        <Button value="Sign Up"></Button>
        <ButtonText value="Return to Sign In" to="/" />
      </Form>
    </Container>
  );
};