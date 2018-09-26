import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import githubSvg from '../../assets/icon/github.svg';
import linkedinSvg from '../../assets/icon/linkedin.svg';
import andyPng from '../../assets/icon/andy.png';

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
              <img src={andyPng} className="icon-large ml1" />
            </Link>
            <a href="https://www.github.com/aebrow4">
              <img src={githubSvg} className="icon-large ml1" />
            </a>
            <a href="https://www.linkedin.com/in/andrewebrownaeb0">
              <img src={linkedinSvg} className="icon-large ml1" />
            </a>
          </div>
        </div>
      </header>
    );
  }
}

