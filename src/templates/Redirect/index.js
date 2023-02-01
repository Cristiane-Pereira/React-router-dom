import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/NavBar";

const Redirect = () => {
  const [time, setTime] = useState(10);
  const tab = "Redirect";
  const timeout = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      setTime((t) => t - 1);

      if (time <= 0) {
        navigate("/about", { state: `This is the state: ${Math.random()}` });
      }

      return clearTimeout(timeout.current);
    }, 1000);
  }, [time]);

  useEffect(() => {
    document.title = tab;
  }, []);

  return (
    <section className="section_redirect">
      <Navbar />
      <center
        style={{ marginTop: "100px", color: "black", fontWeight: "bold" }}
      >
        <h1>
          Get out of here in:{" "}
          <strong style={{ color: "#0D6EFD" }}>{time}</strong> segundos.
        </h1>
      </center>
    </section>
  );
};

export default Redirect;
