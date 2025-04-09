// src/utils/analytics.js
import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-C1F46839C8"); // ← 발급받은 ID
};

export const trackPage = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
