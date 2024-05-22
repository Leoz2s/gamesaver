import { Container } from "./styles";
import {ButtonText} from "../ButtonText";

export function Header() {
  return(
    <Container>
      <div id="logo">
        <h1>Game Saver</h1>
      </div>

      <nav>
        <ul>
          <li><ButtonText value="Home" /></li>
          <li><ButtonText value="User" /></li>
        </ul>
      </nav>
    </Container>
  );
};