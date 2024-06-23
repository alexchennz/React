import { useRouter } from "next/router";
import React from "react";

const NewsDetails = () => {
  const router = useRouter();
  console.log(router.query.newsid);
  
  return <h1>News Details Page</h1>;
};

export default NewsDetails;
