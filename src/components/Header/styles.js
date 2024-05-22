import styled from "styled-components";

export const Container = styled.div`
  padding: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  > #logo {
    align-self: center;
  }

  > nav ul {
    display: flex;
    gap: 1rem;

    list-style: none;
  }
`;