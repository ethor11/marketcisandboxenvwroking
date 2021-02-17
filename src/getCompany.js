import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./bracket.css";

export default class CompanyID extends React.Component {
  state = {
    company: []
  };
  componentDidMount() {
    axios
      .get(
        "https://fmpcloud.io/api/v3/profile/TSLA?apikey=4a913b138c66a8ba8885339480785676"
      )
      .then((res) => {
        console.log(res);
        this.setState({ company: res.data });
      });
  }
  render() {
    return (
      <div>
        <div class="row row-sm mg-10 nav-fill">
          {this.state.company.map((company) => (
            <img class="img-thumbnail" src={company.image}></img>
          ))}
          {this.state.company.map((company) => (
            <h2 class="mg-l-7" key={company.companyName}>
              {company.companyName}
            </h2>
          ))}
        </div>
        <div>
          <div class="row mg-l-10">
            <p class="tx-18">Ticker: </p>
            {this.state.company.map((company) => (
              <p class="mg-l-7 tx-18" key={company.symbol}>
                {company.symbol}
              </p>
            ))}
          </div>
          <div class="row mg-l-10">
            <p class="tx-18">Price: </p>
            {this.state.company.map((company) => (
              <p class="mg-l-7 tx-18" key={company.price}>
                {company.price}
              </p>
            ))}
          </div>
          <div class="row mg-l-10">
            <p class="tx-18">1yr Range: </p>
            {this.state.company.map((company) => (
              <p class="mg-l-7 tx-18" key={company.range}>
                {company.range}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<CompanyID />, document.getElementById("test"));
