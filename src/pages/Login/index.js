import React from "react";
import { Container, ContainerForm, Form, Label } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

function Login() {
  return (
    <Container>
      <h2>Acesse sua conta</h2>
      <p>Entre com seu e-mail e senha!</p>
      <ContainerForm>
        <Form action="">
          <Label>E-mail</Label>
          <Input type="email" placeholder="Informe seu E-mail" />
          <Label>Senha</Label>
          <Input type="password" placeholder="Informe seu Senha" />
          <Button type="submit">Fazer Login</Button>
        </Form>
      </ContainerForm>
    </Container>
  );
}

export default Login;
