import React from "react";
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";


const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">
        The possibilities are <br /> beyond your imagination
      </h1>
      <p>
        GPT-3 offers an exceptional level of natural language processing,
        allowing it to understand and respond to user inputs in a human-like
        manner. It can engage in free-flowing conversations, answer questions,
        provide explanations, and even generate creative content like stories,
        poems, or code snippets.
      </p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
