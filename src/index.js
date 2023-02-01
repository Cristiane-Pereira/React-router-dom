import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./templates/Home";
import About from "./templates/About";
import NotFound from "./templates/NotFound";
import Posts from "./templates/Posts";
import Redirect from "./templates/Redirect";
import Text from "./components/Text";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/home/:slug?/:id?" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path=":id" element={<Text />} />
        </Route>
        <Route path="/posts/:id?" element={<Posts />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/redirect" element={<Redirect />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
