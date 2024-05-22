import { Container, Main } from "./styles";

import {Header} from "../../components/Header";
import {Card} from "../../components/Card";
import {Footer} from "../../components/Footer";

export function Home() {
  return(
    <Container>
      <Header />

      <Main>
        <Card title="Game" />
      </Main>

      <Footer />
    </Container>
  );
};