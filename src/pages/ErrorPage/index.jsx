import { useRouteError } from "react-router-dom";
import { Container } from "./styles";

export function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return(
    <Container>
      <h1>Error while loading the page. Sorry!</h1>
      <p>An unexpected error has ocurred.</p>
      <p><i>{error.statusText || error.message}</i></p>
    </Container>
  );
};