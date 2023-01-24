import React from "react";
import SectionTitle from "../components/sectionTitle/SectionTitle";

function Home() {
  return (
    <div className="center">
      <SectionTitle
        title="Components Repository"
        subtitle="This is my reactJS components repository."
      />
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2015/12/28/02/58/home-1110868_960_720.png"
          alt=""
          style={{ width: "500px" }}
        />
      </div>
    </div>
  );
}

export default Home;
