import { GitHub, Twitter } from "@material-ui/icons";
import React from "react";
import "./css/home.css";
import html from "./assets/html.png";
import css from "./assets/css.png";
import js from "./assets/js.png";

const Home = () => {
  return (
    <div className="home">
      <a target="_" href="https://your-url" className="github-corner">
        <svg
          width="80"
          height="80"
          viewBox="0 0 250 250"
          className="svg"
          aria-hidden="true"
        >
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
          <path
            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
            fill="currentColor"
            style={{ transformOrigin: "130px 106px" }}
            class="octo-arm"
          ></path>
          <path
            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
            fill="currentColor"
            class="octo-body"
          ></path>
        </svg>
      </a>
      <div className="sidebar">
        <div className="top-sidebar">
          <h2 className="logo">Coffee Code</h2>
          <h5>Try our Editor</h5>
          <div className="btn-cont">
            <a href="/editor" className="btn">
              Start Coding
            </a>
          </div>
          <div className="line"></div>
          <a target="_" href="http://github.com/saviomartin" className="link">
            Star App on Github <GitHub style={{ marginLeft: 5 }} />
          </a>
          <a
            target="_"
            href="https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&url=Hey%20there%20%F0%9F%91%8B,%20I%20just%20found%20an%20awesome%20tool%20that%20could%20help%20you%20code%20frontend%20apps%20more%20productive%20and%20easy%20developed%20by%20@saviomartin7%20%20Check%20it%20out:%20https://coffeecode.vercel.app/%20(It%20works%20Offline%F0%9F%A5%B3)"
            className="link"
          >
            Tweet the App <Twitter style={{ marginLeft: 5 }} />
          </a>
          <div className="line2"></div>
        </div>
        <h4>
          Developed by
          <a href="https://github.com/saviomartin"> Savio Martin </a>with{" "}
          <span aria-label="love" role="img">
            ❤️
          </span>
        </h4>
      </div>
      <div className="main">
        <div className="left">
          <h1>Coding frontend apps, is now fast and easy</h1>
          <p>
            Indroducing Coffe Code, easily manage your frontend app and improove
            your productivity. Works through LocalStorage, so you never will
            lose your code. Try it now
          </p>

          <div className="btn-cont">
            <a href="/editor" className="btn">
              Start Coding
            </a>
          </div>
          <a
            target="_"
            href="https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&url=Hey%20there%20%F0%9F%91%8B,%20I%20just%20found%20an%20awesome%20tool%20that%20could%20help%20you%20code%20frontend%20apps%20more%20productive%20and%20easy%20developed%20by%20@saviomartin7%20%20Check%20it%20out:%20https://coffeecode.vercel.app/%20(It%20works%20Offline%F0%9F%A5%B3)"
            className="love"
          >
            Tweet the app <Twitter style={{ marginLeft: 5 }} />
          </a>
        </div>
        <div className="right">
          <div className="cont">
            <div className="grey"></div>
            <img src={html} alt="" className="html" />
            <img src={css} alt="" className="css" />
            <img src={js} alt="" className="js" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
