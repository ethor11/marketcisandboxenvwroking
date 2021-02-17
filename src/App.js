import React from "react";
import ReactDOM, { render } from "react-dom";
import "./bracket.css";

export default class App extends React.Component {
  render() {
    return (
      <div class="br-sideleft pos-fixed">
        <label class="sidebar-label pd-x-10 mg-t-20">Snapshot</label>
        <div id="test"></div>
        <label class="sidebar-label pd-x-10 mg-t-20">Navigation</label>
        <ul class="br-sideleft-menu">
          <li class="br-menu-item">
            <a href="{% url 'web:advanced-charting' %}" class="br-menu-link">
              <i class="menu-item-icon icon ion-ios-home-outline tx-24"></i>
              <span class="menu-item-label">Dashboard</span>
            </a>
          </li>
          <li class="br-menu-item">
            <a href="{% url 'web:advanced-charting' %}" class="br-menu-link">
              <i class="menu-item-icon icon ion-ios-analytics tx-24"></i>
              <span class="menu-item-label">Advanced Charting</span>
            </a>
          </li>
          <li class="br-menu-item">
            <a href="#" class="br-menu-link with-sub">
              <i class="menu-item-icon icon ion-ios-cog-outline tx-24"></i>
              <span class="menu-item-label">Valuations</span>
            </a>
            <ul class="br-menu-sub">
              <li class="sub-item">
                <a href="#" class="sub-link">
                  Discounted Cash Flow (DCF)
                </a>
              </li>
              <li class="sub-item">
                <a href="#" class="sub-link">
                  Dividend Discount Model (DDM)
                </a>
              </li>
              <li class="sub-item">
                <a href="#" class="sub-link">
                  Peer Comparison
                </a>
              </li>
            </ul>
          </li>
          <li class="br-menu-item">
            <a href="#" class="br-menu-link">
              <i class="menu-item-icon icon ion-ios-pulse tx-24"></i>
              <span class="menu-item-label">Financials Analysis</span>
            </a>
          </li>
          <li class="br-menu-item">
            <a href="#" class="br-menu-link">
              <i class="menu-item-icon icon ion-chatbubbles tx-24"></i>
              <span class="menu-item-label">Social Sentiment</span>
            </a>
          </li>
          <li class="br-menu-item">
            <a href="#" class="br-menu-link">
              <i class="menu-item-icon icon ion-ios-paper-outline tx-24"></i>
              <span class="menu-item-label">News</span>
            </a>
          </li>
          <li class="br-menu-item">
            <a href="#" class="br-menu-link">
              <i class="menu-item-icon icon ion-ios-briefcase-outline tx-24"></i>
              <span class="menu-item-label">Company Description</span>
            </a>
          </li>
        </ul>
        <label class="sidebar-label pd-x-10 mg-t-20">Navigation</label>
        <div id="peerGroup"></div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
