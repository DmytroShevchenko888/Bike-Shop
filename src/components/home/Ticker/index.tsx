import React from "react";
import TickerLogoBlock from "./TickerLogoBlock";

interface TickerProps {}

const Ticker: React.FC<TickerProps> = () => {
  return (
    <section className="ticker">
      {/* This two component for show uninterrupted ticker animation */}
      <TickerLogoBlock />
      <TickerLogoBlock />
    </section>
  );
};

export default Ticker;
