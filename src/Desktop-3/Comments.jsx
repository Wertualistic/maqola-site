import React from "react";
import img from '../imgs/image-186.png';

function Comments() {
  return (
    <div className="comments">
      <div className="top">
        <h1>
          Komentlar <span>19</span>
        </h1>
        <a href="/#"><i className="fas fa-pen"></i>Koment Yozish</a>
      </div>
      <hr />
      <div className="all-cards">
        <div className="card">
            <div className="profile">
                <img src={img} />
                <div className="desc">
                    <div className="pr">
                        <h3>Ayjamal Sterling</h3>
                        <div className="time">
                        May 17, 6:38 pm
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur. Tristique rutrum neque non dolor. Dictum venenatis lorem interdum aenean malesuada. Tellus congue fermentum aenean proin lorem. Vel odio dolor tincidunt.</p>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="profile">
                <img src={img} />
                <div className="desc">
                    <div className="pr">
                        <h3>Ayjamal Sterling</h3>
                        <div className="time">
                        May 17, 6:38 pm
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur. Tristique rutrum neque non dolor. Dictum venenatis lorem interdum aenean malesuada. Tellus congue fermentum aenean proin lorem. Vel odio dolor tincidunt.</p>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="profile">
                <img src={img} />
                <div className="desc">
                    <div className="pr">
                        <h3>Ayjamal Sterling</h3>
                        <div className="time">
                        May 17, 6:38 pm
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur. Tristique rutrum neque non dolor. Dictum venenatis lorem interdum aenean malesuada. Tellus congue fermentum aenean proin lorem. Vel odio dolor tincidunt.</p>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="profile">
                <img src={img} />
                <div className="desc">
                    <div className="pr">
                        <h3>Ayjamal Sterling</h3>
                        <div className="time">
                        May 17, 6:38 pm
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur. Tristique rutrum neque non dolor. Dictum venenatis lorem interdum aenean malesuada. Tellus congue fermentum aenean proin lorem. Vel odio dolor tincidunt.</p>
                </div>
            </div>
        </div>
      </div>
      <button className="btn"><i class="fa-solid fa-arrows-rotate"></i> Ko'proq ko'rish</button>
      <div className="send">
        <h1>Siz Nima Deb O'ylaysiz ?</h1>
        <textarea name="" id="" cols="70" rows="10"></textarea>
        <button>Yuborish</button>
      </div>
    </div>
  );
}

export default Comments;
