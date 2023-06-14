import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollBottomTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the bottom of the page
    window.scrollTo(0, document.body.scrollHeight);

    // Wait for 1.5 seconds then scroll to the top
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1500);
  }, [pathname]);

  return null;
};

export default ScrollBottomTop;
