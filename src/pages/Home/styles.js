import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: max-content auto max-content;
  grid-template-areas: 
    'Home' 
    'Main'
    'Footer';
  height: 100vh;
  align-items: start;
`;

export const Main = styled.div`
  padding: 1rem;
  
  display: grid;
  justify-content: center;
`;