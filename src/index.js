import React, { Component } from "react";
import ReactDOM from "react-dom";
import data from "./Sherlook.json";

import "./styles.css";

class App extends Component {
  //componentWillMount() {
  // getSherlook(id){
  //return this.http.get("./Sherlook.json")
  render() {
    console.log(data);
    return (
      <div className="App">
        <h1>Sherlock Episode list</h1>
        {data.map((Episode, index) => {
          return (
            <div className="Container">
              <h1>
                {Episode.name},Season {Episode.season}
              </h1>
              ,
              <img src={Episode.image.medium} />,
              <h3>Episode {Episode.number}</h3>,
              <p>
                <b>{Episode.summary}</b>
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
