import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Navbar from "../../components/NavBar";

const Home = () => {
  const tab = "Exemple Router Dom Home";
  const { slug, id } = useParams();
  const location = useLocation();

  console.log(location);

  useEffect(() => {
    document.title = tab;
  }, []);

  return (
    <section>
      <Navbar />
      <center>
        <h1
          style={{ marginTop: "100px", color: "#0D6EFD", fontWeight: "bold" }}
        >
          Home
        </h1>
        <p>
          Slug: {slug} ID: {id}
        </p>
      </center>
    </section>
  );
};

export default Home;
