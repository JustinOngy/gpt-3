import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Collaborate with an AI Partner",
    text: "Engage in meaningful conversations, bounce ideas back and forth, and receive valuable feedback. GPT-3 can assist you in brainstorming, troubleshooting, and refining your plans, ",
  },
  {
    title: "Harness Deep Learning Capabilities",
    text: "Powered by GPT-3, GPT-3 has been trained on an extensive dataset to understand and generate human-like text. ",
  },
  {
    title: "Time and Cost Efficiency",
    text: "Building something amazing often requires significant time and resources. GPT-3 can help streamline your development process by providing quick and relevant information ",
  },
  {
    title: "Continuous Learning and Improvement",
    text: "OpenAI is committed to enhancing ChatGPT's capabilities continually. As an AI language model, it benefits from ongoing updates and improvements",
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">
        The Future is Now and You Just Need to Realize It. Step into Future
        Today. & Make it Happen.
      </h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
