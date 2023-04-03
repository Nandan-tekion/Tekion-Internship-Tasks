import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {

    // const navigate = useNavigate();

    // setTimeout(() => {navigate('/products')},1000);

  return (
    <>
      <h1>Home Page</h1>
      <p>
        See some <Link to="products">exiting products</Link>
      </p>
    </>
  );
};

export default Home;
