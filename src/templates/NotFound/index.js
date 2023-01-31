import React, { useEffect } from "react";
import Navbar from "../../components/NavBar";

const NotFound = () => {
  const tab = "Not found | erro 404";

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
          Erro 404 - Página não encontrada :(
        </h1>
      </center>
    </section>
  );
};

export default NotFound;
