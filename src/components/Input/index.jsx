import { useEffect, useState } from "react";
import { Container } from "./styles";

export function Input(id, labelText, placeholder, ...rest) {
  const [label, setLabel] = useState("");

  useEffect(() => {
    setLabel(labelText);

    console.log(labelText)
  }, [labelText]);

  return(
    <Container>
      <div className="input-wrapper" {...rest} >
        <label htmlFor={id}></label>
        <input type="text" id={id} placeholder={placeholder} />
      </div>
    </Container>
  );
};