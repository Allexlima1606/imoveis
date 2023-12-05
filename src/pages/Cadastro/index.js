import React from "react";
import { Container, ContainerForm, Form, Label } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

function Cadastro() {
  return (
    <Container>
      <h2>Crie sua conta</h2>
      <p>Cadastre-se para acessar a plataforma!</p>
      <ContainerForm>
        <Form action="">
          <Label>Nome</Label>
          <Input type="email" placeholder="Informe seu Nome" />
          <Label>E-mail</Label>
          <Input type="email" placeholder="Informe seu E-mail" />
          <Label>Senha</Label>
          <Input type="password" placeholder="Informe seu Senha" />
          <Button type="submit">Cadastre-se</Button>
        </Form>
      </ContainerForm>
    </Container>
  );
}

export default Cadastro;
