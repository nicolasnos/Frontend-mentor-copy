import React, { useState } from "react";
import Imagen1 from "../assets/images/desktop-image-hero-1.jpg";
import Imagen2 from "../assets/images/desktop-image-hero-2.jpg";
import Imagen3 from "../assets/images/desktop-image-hero-3.jpg";
import BackAngle from "../assets/images/icon-angle-left.svg";
import ForwardAngle from "../assets/images/icon-angle-right.svg";
import Arrow from "../assets/images/icon-arrow.svg";
import "../Styles/Slider.css";

const Slider = () => {
  const content = [
    {
      title: "Discover innovative ways to decorate",
      description:
        "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
      image: Imagen1,
      alt: "imagen1",
    },
    {
      title: "We are available all across the globe",
      description:
        "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
      image: Imagen2,
      alt: "imagen2",
    },
    {
      title: "Manufactured with the best materials",
      description:
        "Our modern furniture store provide a high quality furniture in a small space. We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
      image: Imagen3,
      alt: "imagen3",
    },
  ];
  //state for the content
  const [currentContent, setCurrentContent] = useState(0);
  //state to know if it's animating
  const [isAnimating, setIsAnimating] = useState(false);

  const handleContent = (index) => {
    setIsAnimating(true);
    setTimeout(() => {
      if (index) {
        if (currentContent < content.length - 1) {
          setCurrentContent(currentContent + 1);
        } else {
          setCurrentContent(0);
        }
      }
      if (index === 0) {
        if (currentContent !== 0) {
          setCurrentContent(currentContent - 1);
        }
      }
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section className="topPage">
      <article className="imagesDivision">
        <div className="slider-container">
          <img
            src={content[currentContent].image}
            alt="slider"
            className={`slider-image ${isAnimating ? "slider-image-exit" : ""}`}
          />
        </div>
        <div className="navbuttons">
          <button onClick={() => handleContent(0)}>
            <img src={BackAngle} alt="imagen previa button" />
          </button>
          <button onClick={() => handleContent(1)}>
            <img src={ForwardAngle} alt="siguiente imagen button" />
          </button>
        </div>
      </article>
      <article className="description">
        <h3>{content[currentContent].title}</h3>
        <p>{content[currentContent].description}</p>
        <div className="shopNow">
          <a href="#">SHOP NOW</a>
          <img src={Arrow} alt="arrow" />
        </div>
      </article>
    </section>
  );
};

export default Slider;
