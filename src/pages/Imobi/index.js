import React, { Fragment } from "react";
import {
  Container,
  Description,
  Left,
  Profile,
  ProfileContact,
  ProfileDescription,
  ProfileFormContact,
  ProfileImg,
  Right,
  Thumb,
} from "./styles";
import TopBanner from "../../components/TopBanner";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";

function Imobi() {
  return (
    <Fragment>
      <TopBanner />
      <Container>
        <Left>
          <Thumb>
            <img src="https://images.unsplash.com/photo-1694409496215-d116011d0d1b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </Thumb>
          <Description>
            <h2>Apartamento / Alugar</h2>
            <p>Lorem ipsum dolor sit amet com</p>
          </Description>
        </Left>
        <Right>
          <Profile>
            <ProfileImg>
              <img
                src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
                alt=""
              />
            </ProfileImg>
            <ProfileDescription>
              <h3>Jhon Due</h3>
              <p>Informação do Usuário</p>
            </ProfileDescription>
          </Profile>
          <ProfileContact>
            <h3>Jhon Due</h3>
            <p>(47) 111-1111</p>
            <p>teste@teste.com</p>
          </ProfileContact>
          <ProfileFormContact>
            <h3>Contate o anunciante</h3>
            <form>
              <Input type="text" placeholder="Nome:" name="" id="" />
              <Input type="text" placeholder="E-mail:" name="" id="" />
              <TextArea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Mensagem:"
              ></TextArea>
              <Button>Enviar Mensagem</Button>
            </form>
          </ProfileFormContact>
        </Right>
      </Container>
    </Fragment>
  );
}

export default Imobi;
