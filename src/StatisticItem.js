import React from "react";
import { kFormatter } from "./Formatter"

const StatisticItem = ({ heading, value }) => (
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">{heading}</p>
      <p className="title">{kFormatter(value)}</p>
    </div>
  </div>
);

export default StatisticItem;
