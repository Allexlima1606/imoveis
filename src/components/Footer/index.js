import React, { Fragment } from "react";
import Logo from "../../assets/logo.png";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Container, Item, Copy } from "./styles";

function Footer() {
  return (
    <Fragment>
      <Container>
        <Item>
          <img src={Logo} alt="" />
          <p>Lorem Ipsum is simply dummy text of the print</p>
          <nav>
            <li>
              <span>
                <FaFacebook size={32} />
              </span>
            </li>
            <li>
              <span>
                <FaInstagram size={32} />
              </span>
            </li>
            <li>
              <span>
                <FaWhatsapp size={32} />
              </span>
            </li>
          </nav>
        </Item>
        <Item>
          <h3>Our Services</h3>
          <ul>
            <li>
              <span>Comprar</span>
            </li>
            <li>
              <span>Alugar</span>
            </li>
            <li>
              <span>Vender</span>
            </li>
          </ul>
        </Item>
        <Item>
          <h3>Our Services</h3>
          <ul>
            <li>
              <span>Comprar</span>
            </li>
            <li>
              <span>Alugar</span>
            </li>
            <li>
              <span>Vender</span>
            </li>
          </ul>
        </Item>
        <Item>
          <h3>Our Services</h3>
          <ul>
            <li>
              <span>Comprar</span>
            </li>
            <li>
              <span>Alugar</span>
            </li>
            <li>
              <span>Vender</span>
            </li>
          </ul>
        </Item>
      </Container>
      <Copy>
        <p>@ Copyright 22-Workside Tecnologia All Rights Reserved.</p>
        <ul>
          <li>
            <spam>Termos de Uso</spam>
          </li>
          <li>
            <spam>Politica de Privacidade</spam>
          </li>
          <li>
            <spam>Politica de Cookies</spam>
          </li>
        </ul>
      </Copy>
    </Fragment>
  );
}

export default Footer;
