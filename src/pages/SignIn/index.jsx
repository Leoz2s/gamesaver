import { Container, Form } from "./styles";
import {Input} from "../../components/Input";
import {ButtonText} from "../../components/ButtonText";
import {Button} from "../../components/Button";

import { Link } from "react-router-dom";

export function SignIn() {
  return(
    <Container>
      <h1>Game Saver</h1>

      <Form>
        <Input id="email" 
          labelText="Insert your e-mail" 
          placeholder="Insert your e-mail"
        />
        <Input id="password" 
          labelText="Insert your password" 
          placeholder="Insert your password" 
        />
        
        <Button value="Log In"></Button>
        <ButtonText value="Sign up"  />

        {/* <Link /> */}
      </Form>
    </Container>
  );
};