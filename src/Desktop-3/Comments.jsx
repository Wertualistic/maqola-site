import React from "react";
import img from '../imgs/image-186.png';

function Comments() {
  return (
    <div className="comments container">
      <div className="top">
        <h1>
          Komentlar <span>19</span>
        </h1>
        <a href="/#"><i className="fas fa-pen"></i>Koment Yozish</a>
      </div>
      <hr />
      <div className="all-card">
        <div className="card container border-0 border-bottom">
            <div className="profile d-flex">
                <img src={img} width='50px' height='50px'/>
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
        <div className="card container border-0 border-bottom">
            <div className="profile d-flex">
                <img src={img} width='50px' height='50px'/>
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
        <div className="card container border-0 border-bottom">
            <div className="profile d-flex">
                <img src={img} width='50px' height='50px'/>
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
        <div className="card container border-0 border-bottom">
            <div className="profile d-flex">
                <img src={img} width='50px' height='50px'/>
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
      <button className="btn btn-light container"><i class="fa-solid fa-arrows-rotate"></i> Ko'proq ko'rish</button>
      <div className="send">
        <h1>Siz Nima Deb O'ylaysiz ?</h1>
        <textarea cols="40" rows="10" className="form-control container w-3" style={{'maxWidth': '700px'}}></textarea>
        <button className="btn btn-primary float-start" style={{'color': 'white', 'width': '130px'}}>Yuborish <i className="fas fa-line-right"></i></button>
      </div>
    </div>
  );
}

export default Comments;
