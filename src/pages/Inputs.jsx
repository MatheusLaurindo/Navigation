import React, { useState } from "react";
import Button from "../components/button/Button";
import Input from "../components/input/Input";
import SectionTitle from "../components/sectionTitle/SectionTitle";

function PageInputs() {
  const [valueUser, setValueUser] = useState("");
  const [valuePassword, setValuePassword] = useState("");
  return (
    <div className="center">
      <SectionTitle
        title="Input Component"
        subtitle="Here you can see my input component page."
      />
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <Input
          type="text"
          name="input"
          label="User*"
          value={valueUser}
          setAction={(event) => setValueUser(event.target.value)}
          placeholder="Tell us you username"
        />
        <Input
          type="password"
          name="input"
          label="Password*"
          value={valuePassword}
          setAction={(event) => setValuePassword(event.target.value)}
          placeholder="Tell us you password"
        />
        <Button value="Login" type="submit" color="#fb8500"></Button>
      </div>
    </div>
  );
}

export default PageInputs;
