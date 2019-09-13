import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { ASSET_HOST } from "../../config";

export default class Header extends Component {
  render() {
    return (
      <header className="g-gray100 mt0 b-purple700 bs-solid bw-3 pt1 pb1 mb4 b-top">
        <div className="content justify-between flex">
          <div className="">
            <Link to="/">
              <h1 className="family-opensans valign-top inline mr1 c-trueblack">
                Listening
              </h1>
            </Link>
          </div>
          <div className="">
            <Link to="/about">
              <img src={`${ASSET_HOST}/assets/icon/andy.png`} className="icon-large ml1" />
            </Link>
            <a href="https://www.github.com/aebrow4">
              <img src={`${ASSET_HOST}/assets/icon/github.svg`} className="icon-large ml1" />
            </a>
            <a href="https://www.linkedin.com/in/andrewebrownaeb0">
              <img src={`${ASSET_HOST}/assets/icon/linkedin.svg`} className="icon-large ml1" />
            </a>
          </div>
        </div>
      </header>
    );
  }
}

