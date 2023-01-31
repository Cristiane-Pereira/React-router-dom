import React, { useEffect } from "react";
import Navbar from "../../components/NavBar";

const About = () => {
  const tab = "Exemple Router Dom About";

  useEffect(() => {
    document.title = tab;
  }, []);
  return (
    <section className="section_about">
      <Navbar />
      <center>
        <h1
          style={{ marginTop: "100px", color: "#0D6EFD", fontWeight: "bold" }}
        >
          About
        </h1>
      </center>
    </section>
  );
};

export default About;
