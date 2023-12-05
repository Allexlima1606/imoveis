import React, { Fragment } from "react";
import Card from "../../components/Card";
import { Header, Wrapper } from "./styles";

function Home() {
  let Cards = [];
  for (let i = 0; i < 4; i++) {
    Cards.push(<Card key={i} />);
  }
  return (
    <Fragment>
      <Header>
        <h2>find the property of your dreans!</h2>
      </Header>
      <Wrapper>
        <Card />
      </Wrapper>
    </Fragment>
  );
}

export default Home;
