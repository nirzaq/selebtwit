import React, { Component } from "react";
import "./App.css";
import LeaderboardItem from "./LeaderboardItem";
import indonesia from "./indonesia.json";
import world from "./world.json";
import { compareValues } from "./Util";
class App extends Component {
  render() {
    let data = []
    const region = this.props.region
    if (region === "Indonesia") {
    data = indonesia.sort(compareValues("score", "desc"));
    } else {
    data = world.sort(compareValues("score", "desc"));
    }
    return (
        <div className="container">
          <h1 className="App-title is-size-2 has-text-black has-text-centered">
            <span class="icon">
              <img
                src="twitter_circle_logo.svg"
                alt="Selebtwit Statistic Analysis"
              />
            </span>{" "}
            Selebtwit
          </h1>
          <h2 className="is-size-3 has-text-black has-text-centered">{this.props.leaderboardTitle}</h2>
        <ul className="leaderboard">
          {data.map((selebtwit, index) => {
            return <LeaderboardItem rank={index + 1} {...selebtwit} />;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
