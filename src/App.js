import React from 'react';
import './App.scss';
import logo from './assets/logo.png';
import sprite from './assets/sprite.svg';
import user from './assets/user.jpg';

function App() {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="" className="logo"/>
        <form action="#" className="search">
          <input type="text" className="search__input" placeholder = "Search hotels...."/>
          <button className="search__button">
            <svg className="search__icon">
              <use xlinkHref = {sprite + "#icon-magnifying-glass"}></use>
            </svg>
          </button>
        </form>
        <nav className="user-nav">
          <div className="user-nav__icon-box">
            <svg className="user-nav__icon">
              <use xlinkHref = {sprite + "#icon-bookmark"}></use>
            </svg>
            <span className="user-nav__notifications">7</span>
          </div>
          <div className="user-nav__icon-box">
            <svg className="user-nav__icon">
              <use xlinkHref = {sprite + "#icon-chat"}></use>
            </svg>
            <span className="user-nav__notifications">12</span>
          </div>
          <div className="user-nav__user">
            <img src={user} alt="" className="user-nav__image"/>
            <span className="user-nav__username">Jonas</span>
          </div>
        </nav>
      </header>
      <div className="content">
        <nav className="sidebar">
          <ul className="side-nav">
            <li className="side-nav__items side-nav__items-active">
              <a href="#" className="side-nav__link">
                <svg className="side-nav__icon">
                  <use xlinkHref = {sprite + "#icon-home"} />
                </svg>
                <span className="side-nav__name">Hotel</span>
              </a>
            </li>
            <li className="side-nav__items">
              <a href="#" className="side-nav__link">
                <svg className="side-nav__icon">
                  <use xlinkHref = {sprite + "#icon-aircraft-take-off"} />
                </svg>
                <span className="side-nav__name">Flight</span>
              </a>
            </li>
            <li className="side-nav__items">
              <a href="#" className="side-nav__link">
                <svg className="side-nav__icon">
                  <use xlinkHref = {sprite + "#icon-key"} />
                </svg>
                <span className="side-nav__name">Car rental</span>
              </a>
            </li>
            <li className="side-nav__items">
              <a href="#" className="side-nav__link">
                <svg className="side-nav__icon">
                  <use xlinkHref = {sprite + "#icon-map"} />
                </svg>
                <span className="side-nav__name">Tours</span>
              </a>
            </li>
          </ul>
          <div className="legal">
            &copy; by Avas Bajracharya. All rights reserved.
          </div>
        </nav>
        <main className="description">
          Description part
        </main>
      </div>
    </div>
  );
}

export default App;
