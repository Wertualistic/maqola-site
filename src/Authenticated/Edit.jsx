import React from 'react';
import img from "../imgs/IMAGE (1).svg";
import { Container } from 'react-bootstrap';
import '../Styles/Section.css';
import { Link } from 'react-router-dom';

function Edit() {
  return (
    <div>
       <Container className="section">
      <div className="all-cards">
        <Link to='/authenticated/home/card' className="card">
          <img src={img} alt="" />
          <div className="txt">
            <div className="p">
              <p>
                Lorem ipsum dolor sit amet consectetur. Libero eget augue sed a
                posuere interdum id dolor. Pulvinar ac.
              </p>
              <p className="p1">
                Lorem ipsum dolor sit amet consectetur. Libero eget augue sed a
                posuere interdum id dolor.
              </p>
            </div>
            <div className="all">
            <div className="date__time">
              <div className="date">
                <p>22.11.2022</p>
              </div>
              <div className="time">
                <p>25 min o’qildi</p>
              </div>
            </div>
            <div className="btn">
                Matematika
            </div>
            <div className="i">
            <i className="fas fa-bookmark"></i>
            </div>
            </div>
          </div>
        </Link>
        <Link to='/authenticated/home/card' className="card">
          <img src={img} alt="" />
          <div className="txt">
            <div className="p">
              <p>
                Lorem ipsum dolor sit amet consectetur. Libero eget augue sed a
                posuere interdum id dolor. Pulvinar ac.
              </p>
              <p className="p1">
                Lorem ipsum dolor sit amet consectetur. Libero eget augue sed a
                posuere interdum id dolor.
              </p>
            </div>
            <div className="all">
            <div className="date__time">
              <div className="date">
                <p>22.11.2022</p>
              </div>
              <div className="time">
                <p>25 min o’qildi</p>
              </div>
            </div>
            <div className="btn">
                Matematika
            </div>
            <div className="i">
            <i className="fas fa-bookmark"></i>
            </div>
            </div>
          </div>
        </Link>
        <Link to='/authenticated/home/card' className="card">
          <img src={img} alt="" />
          <div className="txt">
            <div className="p">
              <p>
                Lorem ipsum dolor sit amet consectetur. Libero eget augue sed a
                posuere interdum id dolor. Pulvinar ac.
              </p>
              <p className="p1">
                Lorem ipsum dolor sit amet consectetur. Libero eget augue sed a
                posuere interdum id dolor.
              </p>
            </div>
            <div className="all">
            <div className="date__time">
              <div className="date">
                <p>22.11.2022</p>
              </div>
              <div className="time">
                <p>25 min o’qildi</p>
              </div>
            </div>
            <div className="btn">
                Matematika
            </div>
            <div className="i">
            <i className="fas fa-bookmark"></i>
            </div>
            </div>
          </div>
        </Link>
        <Link to='/authenticated/home/card' className="card">
          <img src={img} alt="" />
          <div className="txt">
            <div className="p">
              <p>
                Lorem ipsum dolor sit amet consectetur. Libero eget augue sed a
                posuere interdum id dolor. Pulvinar ac.
              </p>
              <p className="p1">
                Lorem ipsum dolor sit amet consectetur. Libero eget augue sed a
                posuere interdum id dolor.
              </p>
            </div>
            <div className="all">
            <div className="date__time">
              <div className="date">
                <p>22.11.2022</p>
              </div>
              <div className="time">
                <p>25 min o’qildi</p>
              </div>
            </div>
            <div className="btn">
                Matematika
            </div>
            <div className="i">
            <i className="fas fa-bookmark"></i>
            </div>
            </div>
          </div>
        </Link>
      </div>
    </Container>
    </div>
  )
}

export default Edit