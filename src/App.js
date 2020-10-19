import React from 'react';
import './App.scss';
import logo from './assets/logo.png';
import sprite from './assets/sprite.svg';
import user from './assets/user.jpg';
import hotel1 from './assets/hotel-1.jpg';
import hotel2 from './assets/hotel-2.jpg';
import hotel3 from './assets/hotel-3.jpg';
import user1 from './assets/user-3.jpg';
import user2 from './assets/user-4.jpg';
import user3 from './assets/user-5.jpg';
import user4 from './assets/user-6.jpg';
import user5 from './assets/user-1.jpg';
import user6 from './assets/user-2.jpg';

function App() {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="" className="logo"/>
        <form action="#" className="search">
          <input type="text" className="search__input" placeholder = "Search Hotels..."/>
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
          <div className="gallery">
            <figure className="gallery__items">
              <img src={hotel1} alt="" className="gallery__photo"/>
            </figure>
            <figure className="gallery__items">
              <img src={hotel2} alt="" className="gallery__photo"/>
            </figure>
            <figure className="gallery__items">
              <img src={hotel3} alt="" className="gallery__photo"/>
            </figure>
          </div>
          <div className="overview">
            <h1 className="overview__heading">Hotel Annapurna</h1>
            <div className="overview__stars">
              <svg className="overview__icon">
                <use xlinkHref = {sprite + "#icon-star"} />
              </svg>
              <svg className="overview__icon">
                <use xlinkHref = {sprite + "#icon-star"} />
              </svg>
              <svg className="overview__icon">
                <use xlinkHref = {sprite + "#icon-star"} />
              </svg>
              <svg className="overview__icon">
                <use xlinkHref = {sprite + "#icon-star"} />
              </svg>
              <svg className="overview__icon">
                <use xlinkHref = {sprite + "#icon-star"} />
              </svg>
            </div>
            <div className="overview__location">
              <svg className="overview__icon-location">
                <use xlinkHref = {sprite + "#icon-location-pin"} />
              </svg>
              <button className="btn-inline">Budanikantha, Kathmandu</button>
            </div>
            <div className="overview__rating">
              <div className="overview__rating-average">8.6</div>
              <div className="overview__rating-score">426 votes</div>
            </div>
          </div>
          <div className="detail">
            <div className="more">
              <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
              </p>
              <p className="paragraph">
              Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
              </p>
              <ul className="list">
                <li className="list__item">Close to the mountain</li>
                <li className="list__item">Breakfast included</li>
                <li className="list__item">Free airport shuffle</li>
                <li className="list__item">Free wifi in all rooms</li>
                <li className="list__item">Air conditioning and heating</li>
                <li className="list__item">Pets allowed</li>
                <li className="list__item">We speak all languages</li>
                <li className="list__item">Perfect for families</li>
              </ul>
              <div className="recommend">
                <p className="recommend__count">
                  Saruna and 3 other friends recommend this hotel.
                </p>
                <div className="recommend__friends">
                  <img src={user1} alt="" className="recommend__photo"/>
                  <img src={user2} alt="" className="recommend__photo"/>
                  <img src={user3} alt="" className="recommend__photo"/>
                  <img src={user4} alt="" className="recommend__photo"/>
                </div>
              </div>
            </div>
            <div className="user-reviews">
              <figure className="review">
                <blockquote className="review__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                </blockquote>
                <figcaption className="review__user">
                  <img src={user5} alt="" className="review__photo"/>
                  <div className="review__user-box">
                    <p className="review__user-name">Raju Lama</p>
                    <p className="review__user-date">Feb 6, 2020</p>
                  </div>
                  <div className="review__rating">7.8</div>
                </figcaption>
              </figure>
              <figure className="review">
                <blockquote className="review__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                </blockquote>
                <figcaption className="review__user">
                  <img src={user6} alt="" className="review__photo"/>
                  <div className="review__user-box">
                    <p className="review__user-name">Kabita Lamichhane</p>
                    <p className="review__user-date">May 11, 2018</p>
                  </div>
                  <div className="review__rating">9.3</div>
                </figcaption>
              </figure>
              <button className="btn-inline">Show all <span>&#8594;</span></button>
            </div>
          </div>
          <div className="action">
            <h1 className="action__book-now">Good News! We have 4 rooms availabe for your selected dates!</h1>
            <button className="btn">
              <span className="btn__visible">Book now</span>
              <span className="btn__invisible"> Only 4 rooms left</span>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
