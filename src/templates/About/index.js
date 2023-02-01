import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/NavBar";

const About = () => {
  const tab = "Exemple Router Dom About";
  const location = useLocation();
  const { state } = location;

  console.log(state);

  useEffect(() => {
    document.title = tab;
  }, []);

  return (
    <section className="section_about">
      <Navbar />
      <center style={{ padding: "0px 50px" }}>
        <h1
          style={{ marginTop: "100px", color: "#0D6EFD", fontWeight: "bold" }}
        >
          About
        </h1>
        <p>{state}</p>
        {/* Para aparecer o Texto aninhado basta passar um prametro na url do roteamento */}
        <Outlet />
      </center>
    </section>
  );
};

export default About;
