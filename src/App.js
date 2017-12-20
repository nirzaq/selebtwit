import React, { Component } from "react";
import "./App.css";
import LeaderboardItem from "./LeaderboardItem";
import leaderboard from "./leaderboard.json";
import { compareValues } from "./Util";
class App extends Component {
  render() {
    const data = leaderboard.sort(compareValues("score", "desc"));

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
        {/* </div> */}
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
