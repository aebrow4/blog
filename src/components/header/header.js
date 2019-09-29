import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ASSET_HOST } from '../../config';

export default class Header extends Component {
  render() {
    return (
      <header className="g-gray100 mt0 b-purple700 bs-solid bw-3 pt1 pb1 mb4 b-top">
        <div className="content justify-between flex">
          <div className="">
            <Link to="/">
              <h2 className="family-opensans valign-top inline mr1 c-gray900 link">
                Momentary liberation
              </h2>
            </Link>
          </div>
          <div className="pth flex">
            <div style={{position: "relative", height: "35px", width: "45px"}}>
              <Link to="/about">
                <img
                  alt="about"
                  src={`${ASSET_HOST}/assets/icon/andy-crop.jpg`}
                  className="icon ml1"
                />
              </Link>
            </div>
            <div style={{position: "relative", height: "35px", width: "45px"}}>
              <a href="https://www.github.com/aebrow4">
                <img
                  alt="github"
                  src={`${ASSET_HOST}/assets/icon/github.svg`}
                  className="icon ml1"
                />
              </a>
            </div>
            <div style={{position: "relative", height: "35px", width: "45px"}}>
              <a href="https://www.linkedin.com/in/andrewebrownaeb0">
                <img
                  alt="linkedin"
                  src={`${ASSET_HOST}/assets/icon/linkedin.svg`}
                  className="icon ml1"
                />
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
