import React from "react";
import "../components/card/Card.css";
import SectionTitle from "../components/sectionTitle/SectionTitle";
import Card from "../components/card/Card";

function Cards() {
  return (
    <div className="center">
      <SectionTitle
        title="Card Component"
        subtitle="Here you que see my card component page."
      />
      <div className="card-area">
        <Card
          img="https://cdn.pixabay.com/photo/2016/11/29/13/25/ace-1869825_960_720.jpg"
          title="Card Example"
          subtitle="That's a card example"
          content="Thats a card example I like to use in my projects. If you like it too, feel free to use it in your own projects :)"
        />
        <Card
          img="https://cdn.pixabay.com/photo/2021/05/22/10/11/fishing-boat-6273132_960_720.jpg"
          title="Card Example"
          subtitle="That's a card example"
          content="Thats a card example I like to use in my projects. If you like it too, feel free to use it in your own projects :)"
        />
        <Card
          img="https://cdn.pixabay.com/photo/2019/12/22/04/18/christmas-4711785_960_720.jpg"
          title="Card Example"
          subtitle="That's a card example"
          content="Thats a card example I like to use in my projects. If you like it too, feel free to use it in your own projects :)"
        />
      </div>
    </div>
  );
}

export default Cards;
