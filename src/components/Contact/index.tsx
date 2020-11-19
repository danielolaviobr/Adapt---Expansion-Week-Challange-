import React, { useState, useCallback } from "react";
import * as Yup from "yup";

import getValidationErrors from "../../utils/getValidationErrors";

import { Container, TextInput, Button, ContentWrapper } from "./styles";
import { useToast } from "../../hooks/toast";

const Contact: React.FC = () => {
  const [fieldFocus, setFieldFocus] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const { addToast } = useToast();

  const handleUserFocus = useCallback(() => {
    setFieldFocus(true);
  }, []);

  const handleUserBlur = useCallback(() => {
    setFieldFocus(false);
  }, []);

  const handleEmailChange = useCallback((event) => {
    const email = event.target.value;
    setUserEmail(email);
  }, []);

  const handleUserSubmit = useCallback(async () => {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email("Insira um e-mail valido")
        .required("Insira o seu e-mail"),
    });

    try {
      await schema.validate({ email: userEmail });
      addToast({ message: "Inscrição realizada" });
      setUserEmail("");
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const validationErrors = getValidationErrors(err);
        addToast({ message: validationErrors.message });
      }
    }
  }, [userEmail, addToast]);

  const handleEnter = useCallback(
    (event) => {
      if (event.key === "Enter") {
        handleUserSubmit();
      }
    },
    [handleUserSubmit]
  );

  return (
    <ContentWrapper>
      <Container fieldFocus={fieldFocus}>
        <TextInput
          placeholder="E-mail"
          onFocus={handleUserFocus}
          onBlur={handleUserBlur}
          onChange={handleEmailChange}
          value={userEmail}
          onKeyDown={handleEnter}
        />
        <Button onClick={handleUserSubmit}>
          <span>Inscrever-se</span>
        </Button>
      </Container>
    </ContentWrapper>
  );
};

export default Contact;
