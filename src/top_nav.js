import React from "react";
import ReactDOM, { render } from "react-dom";
import "./styles.css";

export default class Topnav extends React.Component {
  render() {
    return (
      <div>
        <div class="br-logo">
          <a href="{% url 'web:home' %}">
            <span></span>Market
            <i>CI</i>
            <span></span>
          </a>
        </div>
        <div class="br-header">
          <div class="br-header-left">
            <div class="navicon-left hidden-md-down">
              <a id="btnLeftMenu" href="">
                <i class="icon ion-navicon-round"></i>
              </a>
            </div>
            <div class="navicon-left hidden-lg-up">
              <a id="btnLeftMenuMobile" href="">
                <i class="icon ion-navicon-round"></i>
              </a>
            </div>
            <div class="input-group hidden-xs-down wd-300 transition">
              <div id="searchBar"></div>
              <span class="input-group-btn">
                <button class="btn btn-secondary" type="button">
                  <i class="fa fa-search"></i>
                </button>
              </span>
            </div>
          </div>
          <div class="br-header-right">
            <ul
              class="nav nav-gray-600 active-info tx-uppercase tx-12 tx-medium tx-spacing-2 flex-column flex-sm-row"
              role="tablist"
            >
              <li class="nav-item">
                <a
                  class="nav-link {% if request.path == '/' %}is-active{% endif %}"
                  data-toggle="tab"
                  href="{% url 'web:home' %}"
                  role="tab"
                >
                  MarketCI
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link {% if request.path == '/' %}is-active{% endif %}"
                  data-toggle="tab"
                  href="{% url 'web:home' %}"
                  role="tab"
                >
                  Macro
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link {% if request.path == '/' %}is-active{% endif %}"
                  data-toggle="tab"
                  href="{% url 'web:home' %}"
                  role="tab"
                >
                  Charting
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link {% if request.path == '/' %}is-active{% endif %}"
                  data-toggle="tab"
                  href="{% url 'web:home' %}"
                  role="tab"
                >
                  Screener
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link {% if request.path == '/' %}is-active{% endif %}"
                  data-toggle="tab"
                  href="{% url 'web:home' %}"
                  role="tab"
                >
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link {% if request.path == '/' %}is-active{% endif %}"
                  data-toggle="tab"
                  href="{% url 'web:home' %}"
                  role="tab"
                >
                  About
                </a>
              </li>
            </ul>
            <div class="bd-l bd-2 mg-r-10">
              <div class="navbar-end">
                <div class="navbar-item">
                  <div class="buttons">
                    <a
                      class="button is-primary is-outlined"
                      href="{% url 'account_signup' %}"
                    >
                      Sign up
                    </a>
                    <a class="button is-text" href="{% url 'account_login' %}">
                      Sign in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Topnav />, document.getElementById("top_nav"));
