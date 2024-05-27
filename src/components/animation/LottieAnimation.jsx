// LottieAnimation.js
import React from "react";
import Lottie from "react-lottie";


const LottieAnimation = ({ animationURL, width, height }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationURL,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const animationStyle = {
    height: height,
    width: width,
  };
  return <Lottie options={defaultOptions} style={animationStyle} />;
};

export default LottieAnimation;
