import React from "react";
import LeftImage from "../assets/images/image-about-dark.jpg";
import Right from "../assets/images/image-about-light.jpg";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={LeftImage} alt="couchImage" />
      <div className="text">
        <h2>ABOUT OUR FURNITURE</h2>
        <p>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <img src={Right} alt="couchImage" />
    </footer>
  );
};

export default Footer;
