import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";
import TiltedImage from "../../components/tiltedimage/TiltedImage";
import { TypeAnimation } from "react-type-animation";

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">
        <TypeAnimation
          sequence={[
            "Let's Explore the Capabilities of GPT-3 OpenAI",
            1500,
            "A Powerful Language Model for Conversational AI",
            10000,
          ]}
          repeat={Infinity}
        />
      </h1>
      <p>
        Unleash Your Imagination: With GPT-3 powerful language capabilities, you
        have a virtually limitless playground to bring your ideas to life.
        Whether you're designing a revolutionary app, crafting a compelling
        story, or developing a cutting-edge product, GPT-3 is your creative
        companion that will help you explore new possibilities.
      </p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button" className="hover__button-light_orange">
          Get Started
        </button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <TiltedImage />
    </div>
  </div>
);

export default Header;
