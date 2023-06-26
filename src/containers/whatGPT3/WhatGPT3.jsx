import React from "react";
import { Feature } from "../../components";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is GPT-3"
        text="GPT-3 is an advanced language model developed by OpenAI. It is based on the GPT-3.5 architecture and is designed to engage in natural language conversations with users. It can understand and generate human-like text based on the input it receives."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Chatbots"
        text="Enhanced Customer Service: ChatGPT chatbots offer an advanced level of customer service by providing round-the-clock support and instant responses to customer inquiries. They can handle a wide range of queries, from simple FAQs to complex troubleshooting, ensuring that customers receive prompt assistance and feel valued. "
      />
      <Feature
        title="Knowledgebase"
        text="Vast and Up-to-Date Knowledge: GPT-3's Knowledgebase is built upon a vast amount of information from a diverse range of sources, up until September 2021. This comprehensive knowledge allows it to provide accurate and detailed responses to a wide array of topics."
      />
      <Feature
        title="Education"
        text="Personalized Learning Experience: GPT-3 can offer personalized learning experiences tailored to individual students' needs. It can adapt to various learning styles, preferences, and paces, ensuring that students receive the support and guidance they require."
      />
    </div>
  </div>
);

export default WhatGPT3;
