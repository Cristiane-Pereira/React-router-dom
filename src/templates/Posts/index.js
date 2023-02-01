import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/NavBar";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const tab = "Posts";
  const { id } = useParams();

  const filteredPostsPerPrams = posts.filter(
    (post) =>
      post.id === Number(id) &&
      post.title.toLowerCase().includes(post.title.toLowerCase())
  );

  useEffect(() => {
    document.title = tab;
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      const dataJson = await data.json();
      setPosts(dataJson);
    };

    fetchPosts();
  }, []);

  return (
    <section className="section_about">
      <Navbar />
      <center style={{ marginTop: "100px" }}>
        <h1 style={{ color: "#0D6EFD", fontWeight: "bold" }}>Posts</h1>
        {filteredPostsPerPrams.length ? (
          filteredPostsPerPrams.map((post) => (
            <Fragment>
              <p>
                <b style={{ color: "purple" }}>ID:</b> {post.id}
              </p>
              <p>
                <b style={{ color: "purple" }}>TITLE:</b> {post.title}
              </p>
            </Fragment>
          ))
        ) : (
          <div>
            <p>
              Post não encontrado, passa um paramêtro depois da rota válida!
            </p>
            <span>Ex: http://localhost:3000/posts/10</span>
          </div>
        )}
      </center>
    </section>
  );
};

export default Posts;
