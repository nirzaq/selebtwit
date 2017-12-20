import React, { Component } from "react";
import StatisticItem from "./StatisticItem"
import "./App.css";

class LeaderboardItem extends Component {
  render() {
    
    return (
      <li className="box is-marginless">
        <nav className="level">
          <article className="media level-left">
            <div className="rank is-size-4 has-text-weight-bold has-text-right">
              #{this.props.rank}
            </div>
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={this.props.profileImage} alt={this.props.username} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{this.props.name}</strong>
                  {this.props.verified ? (
                    <span class="icon">
                      <img
                        src="twitter-verified-icon.svg"
                        width="15"
                        height="15"
                        alt={this.props.username}
                      />
                    </span>
                  ) : (
                    " "
                  )}
                  <small>
                    <a href={"https://twitter.com/" + this.props.username}>
                      {this.props.username}
                    </a>
                  </small>
                </p>
                {/* <p className="is-size-7">{this.props.description}</p> */}
              </div>
            </div>
          </article>
          <div className="level-right">
            <StatisticItem heading={"Followers"} value={this.props.followers} />
            <StatisticItem heading={"Tweets"} value={this.props.tweets} />
            <StatisticItem heading={"Total RT"} value={this.props.totalRT} />
            <StatisticItem heading={"Total Likes"} value={this.props.totalLikes} />
            <StatisticItem heading={"Score"} value={this.props.score} />
          </div>
        </nav>
      </li>
    );
  }
}

export default LeaderboardItem;
