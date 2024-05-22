import { Container } from "./styles";
import { Link } from "react-router-dom";

export function PageNotFound() {
  return(
    <Container>
      <h1>Page not found</h1>
      <p>Error 404</p>
      <Link to="/">Return to Home</Link>
    </Container>
  );
};