import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import { Feedback } from "../../components/ui/Feedback";

const Error404 = () => {
  return (
    <>
      <Helmet>
        <title>Oops! Error 404</title>
      </Helmet>
      <Feedback>
        <h1>Error 404</h1>
        <Link to="/">Go to Homepage</Link>
      </Feedback>
    </>
  );
};

export default Error404;
