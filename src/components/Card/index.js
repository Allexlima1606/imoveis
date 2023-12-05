import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { Container, Description, Img, Itens } from "./styles";

function Card() {
  return (
    <Container>
      <Img>
        <img
          src="https://images.unsplash.com/photo-1694409496215-d116011d0d1b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
          alt=""
        />
      </Img>
      <Description>
        <h4>Apartamento</h4>
        <Itens>
          <span>
            <FaMapMarkerAlt />
            Vila Buarque, Sâo Paulo
          </span>
          <span>2.400,00 / mês</span>
        </Itens>
        <Link to="/imovel">
          Detalhes
          <FaArrowRight />
        </Link>
      </Description>
    </Container>
  );
}

export default Card;
