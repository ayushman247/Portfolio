// import "../Home.css"
import { projects } from "../data/projects";
import { blogPosts } from "../data/blogPosts";
import ToggleMenu from "../components/ToggleMenu";
import Marquee from "react-fast-marquee";
import gfolio1 from "../assets/gfolio1.png"
import gfolio2 from "../assets/gfolio2.png"
import typezy1 from "../assets/typezy1.png"
import typezy2 from "../assets/typezy2.png"

function Home() {
  return (
    <div className="layout-container indexpage">
        <ToggleMenu></ToggleMenu>
        <div id="pages">
        <div className="first-page">
        <div className="intro-cont">
        <div className="introduction font-bold !text-[#000000]">
        <h2 className="">
                {" "}
                :) <span className="hello"> Hello!</span>
                {" "} Nice to meet you. I'm <span className="my-name">Ayushman</span>, I'm a{" "}
                <span className="dev"> fullstack developer</span> and
                <span className="write"> technical writer</span> with UI/UX{" "}
                <span className="design">design</span> skills.
              </h2>
        </div>
        </div>
        <div className="scroll-down">
        <span>scroll down</span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fal"
              data-icon="arrow-down"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="svg-inline--fa fa-arrow-down fa-w-14 fa-5x"
            >
              <path
                fill="currentColor"
                d="M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z"
                className=""
              ></path>
            </svg>
        </div>
        </div>
        <div id="skills">
          <div>
            <Marquee className="marquee" pauseOnHover="true">
              <span> Web development </span>
              <span> 3d design </span>
              <span> Graphic design </span>
              <span> Open source </span>
              <span> Community management </span>
              <span> Search Engine Optimization</span>
              <span> Technical support </span>
            </Marquee>
          </div>
          <div >
            <Marquee className="marquee" pauseOnHover="true">
              <span> HTML5 </span>
              <span> CSS3 </span>
              <span> JavaScript </span>
              <span> Markdown</span>
              <span> Python </span>
              <span> React </span>
              <span> Inkscape </span>
              <span> Wordpress </span>
              <span> Gatsby </span>
            </Marquee>
          </div>
        </div>
        <div className="second-page" id="works">

          <div className="work-container">
            <div className="work-separator">
              <span className="work-separator-year">2025</span>
              <span className="work-separator-line"></span>
            </div>
            <div className="work">
              <div data-scroll="" data-scroll-speed="1" className="work-col">
                <h2 className="work-col__name">gfolio</h2>
                <p className="technologies"> HTML • CSS • JavaScript (React)</p>
                <p className="work-col__text">
                  A Google Search themed portfolio website.
                </p>
                <a
                  href="https://github.com/ayushman247/Basic-crud-App"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-project-link !text-[#5271fc] font-semibold"
                >
                  View Code
                </a>
              </div>
              <div className="work-medias">
                <div className="work-medias__img">
                  <img src={gfolio2} alt="" />
                </div>
                <div className="work-medias__img">
                  <img src={gfolio1} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="work-container">
            <div className="work-separator">
              <span className="work-separator-year">2024</span>
              <span className="work-separator-line"></span>
            </div>
            <div className="work">
              <div data-scroll="" data-scroll-speed="1" className="work-col">
                <h2 className="work-col__name">Typezy</h2>
                <p className="technologies">
                  {" "}
                  HTML • CSS • JavaScript (React)
                </p>
                <p className="work-col__text">
                A fun and fast-paced typing game built with React, where users can test their typing speed and accuracy. Players choose from Easy, Medium, or Hard difficulty levels, each offering different bonus time rewards. The game tracks both current and highest scores, encouraging improvement with each round.
                </p>
                <a
                  href="https://github.com/ayushman247/Type-Checker-Game"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-project-link !text-[#5271fc] font-semibold"
                >
                  View Code
                </a>
              </div>
              <div className="work-medias">
                <div className="work-medias__img">
                  <img src={typezy2} alt="" />
                </div>
                <div className="work-medias__img">
                  <img src={typezy1} alt="" />
                </div>
              </div>
            </div>
          </div>

          <a href="https://github.com/ayushman247/" className="btn-work btn-blog">
            <span className="btn-work__text">View more projects</span>
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 476.213 476.213"
              xmlSpace="preserve"
              className="btn-work__icon"
            >
              <polygon points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 345.606,368.713 476.213,238.106 "></polygon>
            </svg>
          </a>

        </div>
        <div className="contact-page" id="contact">
          <p className="page-desc"> Want to follow my work or talk to me? </p>
          <div className="social">
            <div className="social-item">
              <a href="https://github.com/ayushman247/" className="social-top">
                <span className="social-name"> GitHub </span>
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 476.213 476.213"
                  xmlSpace="preserve"
                  className="social-item__icon"
                >
                  <polygon points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 345.606,368.713 476.213,238.106 "></polygon>
                </svg>
              </a>
              <div className="social-more">Explore my projects and code</div>
            </div>
            <div className="social-item">
              <a
                href="https://www.linkedin.com/in/ayushman-chaturvedi-084961245/?trk=opento_sprofile_details\"
                className="social-top"
              >
                <span className="social-name"> Linkedin </span>
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 476.213 476.213"
                  xmlSpace="preserve"
                  className="social-item__icon"
                >
                  <polygon points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 345.606,368.713 476.213,238.106 "></polygon>
                </svg>
              </a>
              <div className="social-more">Connect with me</div>
            </div>
            <div className="social-item">
              <a href="mailto:ayushman2407@gmail.com" className="social-top">
                <span className="social-name"> Email </span>
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 476.213 476.213"
                  xmlSpace="preserve"
                  className="social-item__icon"
                >
                  <polygon points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 345.606,368.713 476.213,238.106 "></polygon>
                </svg>
              </a>
              <div className="social-more">Chat with me</div>
            </div>
          </div>
        </div>
    </div>
    </div>
  );
}
export default Home;