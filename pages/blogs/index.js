import BlogPage from "@/components/views/components/blog/blog";
import Head from "next/head";
import React from "react";

const Blog = () => {
  return (
    <>
      <Head>
        <title>About PSPAY - Blogs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <BlogPage />
    </>
  );
};

export default Blog;
Blog.layout = "main";
