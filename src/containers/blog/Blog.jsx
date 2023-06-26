import React from "react";
import { Article } from "../../components";
import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports.js";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog01}
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            date="May 16, 2023"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            text="Exploring the Capabilities of GPT-3"
            date="Sept 24, 2023"
          />
          <Article
            imgUrl={blog03}
            text="Understanding the GPT-3 Architecture"
            date="Sept 05, 2022"
          />
          <Article
            imgUrl={blog04}
            text="Ethical Considerations in Deploying GPT-3"
            date="Feb 02, 2023"
          />
          <Article
            imgUrl={blog05}
            text="Enhancing GPT-3 with Reinforcement Learning"
            date="Jan 26, 2023"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
