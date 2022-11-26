import React from "react";
import img from "../imgs/IMAGE.svg";
import "../Styles/Header.css";
import profilePhoto1 from '../imgs/pexels-sound-on-3755931 3.svg';

function Header() {
  return (
    <header>
      <div className="top">
        <div className="img">
          <img src={img} alt="" />
        </div>
        <div className="text">
          <h1>Lorem ipsum dolor.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Feugiat massa duis quam
            vulputate. Faucibus tincidunt amet vitae tincidunt. Id dui urna
            pulvinar nullam amet turpis suspendisse libero viverra. Commodo
            egestas suspendisse suspendisse tortor.
          </p>
          <button>O'qishni boshlash</button>
        </div>
      </div>
      <div className="bottom">
        <h1>Eng ko’p o’qilganlar</h1>
        <div className="all-cards">
        <div className="first">
          <div className="num">
            <h1>1</h1>
          </div>
          <div className="about">
            <div className="profile">
              <div className="photo"><img src={profilePhoto1} alt="" /></div>
              <div className="name">Lola Komilova</div>
            </div>
            <div className="txt">
              <p>Lorem ipsum dolor sit amet consectetur. Blandit <br /> sed.</p>
              <div className="date__time">
                <div className="date">
                  <p>22.11.2022</p>
                </div>
                <div className="time">
                  <p>25 min o’qildi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="first">
          <div className="num">
            <h1>2</h1>
          </div>
          <div className="about">
            <div className="profile">
              <div className="photo"><img src={profilePhoto1} alt="" /></div>
              <div className="name">Lola Komilova</div>
            </div>
            <div className="txt">
              <p>Lorem ipsum dolor sit amet consectetur. Blandit <br /> sed.</p>
              <div className="date__time">
                <div className="date">
                  <p>22.11.2022</p>
                </div>
                <div className="time">
                  <p>25 min o’qildi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="first">
          <div className="num">
            <h1>3</h1>
          </div>
          <div className="about">
            <div className="profile">
              <div className="photo"><img src={profilePhoto1} alt="" /></div>
              <div className="name">Lola Komilova</div>
            </div>
            <div className="txt">
              <p>Lorem ipsum dolor sit amet consectetur. Blandit <br /> sed.</p>
              <div className="date__time">
                <div className="date">
                  <p>22.11.2022</p>
                </div>
                <div className="time">
                  <p>25 min o’qildi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="first">
          <div className="num">
            <h1>4</h1>
          </div>
          <div className="about">
            <div className="profile">
              <div className="photo"><img src={profilePhoto1} alt="" /></div>
              <div className="name">Lola Komilova</div>
            </div>
            <div className="txt">
              <p>Lorem ipsum dolor sit amet consectetur. Blandit <br /> sed.</p>
              <div className="date__time">
                <div className="date">
                  <p>22.11.2022</p>
                </div>
                <div className="time">
                  <p>25 min o’qildi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
