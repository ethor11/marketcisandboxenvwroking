import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./bracket.css";

export default class CompanyPeers extends React.Component {
  state = {
    company: []
  };
  componentDidMount() {
    axios
      .get(
        "https://sandbox.iexapis.com/stable/stock/aapl/peers?token=Tsk_6c38d7e8d1544b308a4db114b02a3b5d"
      )
      .then((res) => {
        console.log(res);
        this.setState({ company: res.data });
      });
  }
  render() {
    return (
      <ul>
        <li class="br-menu-item">
          <a href="#" class="br-menu-link">
            <span class="menu-item-label">{this.state.company[0]}</span>
          </a>
        </li>
        <li class="br-menu-item">
          <a href="#" class="br-menu-link">
            <span class="menu-item-label">{this.state.company[1]}</span>
          </a>
        </li>
        <li class="br-menu-item">
          <a href="#" class="br-menu-link">
            <span class="menu-item-label">{this.state.company[2]}</span>
          </a>
        </li>
        <li class="br-menu-item">
          <a href="#" class="br-menu-link">
            <span class="menu-item-label">{this.state.company[3]}</span>
          </a>
        </li>
        <li class="br-menu-item">
          <a href="#" class="br-menu-link">
            <span class="menu-item-label">{this.state.company[4]}</span>
          </a>
        </li>
      </ul>
    );
  }
}

ReactDOM.render(<CompanyPeers />, document.getElementById("peerGroup"));
