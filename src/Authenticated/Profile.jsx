import React from "react";
import './Profile.css';

function Profile() {
  return (
    <div className='profile container mb-5'>
      <div className="d-flex justify-content-between">
        <h1>Zarina Nizomiddinova <span className="span">Starter</span></h1>
        <button className='btn btn-outline-primary h-25 d-flex justify-content-between align-items-center' style={{width: '120px'}}>Chiqish <i class="ri-logout-box-r-line"></i></button>
      </div><br /><br />
        <div className="d-flex flex-column">
        <h3 style={{borderBottom: '2px solid #086F6C', width: '50px'}}>Profilim</h3>
      </div><br /><br />
      <div className="d-flex flex-column w-75">
        <div className="d-flex border align-items-center div mt-3" style={{height: '50px', borderRadius: '15px'}}>
          <h5 className='ps-3'>Ro’yhatdan o’tilgan sana </h5><h5 className='ps-3 second'>| 29.09.2022 y, 11:02</h5>
        </div>
        <div className="d-flex border align-items-center div mt-3" style={{height: '50px', borderRadius: '15px'}}>
          <h5 className='ps-3'>Isim</h5><h5 className='ps-3 second'>| Zarina</h5>
        </div>
        <div className="d-flex border align-items-center div mt-3" style={{height: '50px', borderRadius: '15px'}}>
          <h5 className='ps-3'>Familya</h5><h5 className='ps-3 second'>| Nizomiddinova</h5>
        </div>
        <div className="d-flex border align-items-center div mt-3" style={{height: '50px', borderRadius: '15px'}}>
          <h5 className='ps-3'>Nom</h5><h5 className='ps-3 second'>| Zari</h5>
        </div>
        <div className="d-flex border align-items-center div mt-3" style={{height: '50px', borderRadius: '15px'}}>
          <h5 className='ps-3'>Email</h5><h5 className='ps-3 second'>| Zari@gmail.com</h5>
        </div>
        <div className="d-flex border align-items-center div mt-3" style={{height: '50px', borderRadius: '15px'}}>
          <h5 className='ps-3'>Telefon nomer</h5><h5 className='ps-3 second'>| +998 90 256 96 62</h5>
        </div>
        <div className="d-flex border align-items-center div mt-3" style={{height: '50px', borderRadius: '15px'}}>
          <h5 className='ps-3'>Mutaxasislik</h5><h5 className='ps-3 second'>| Front-End Devoloper</h5>
        </div>
        <div className="d-flex border align-items-center div mt-3" style={{height: '50px', borderRadius: '15px'}}>
          <h5 className='ps-3'>Biografiya</h5><h5 className='ps-3 second'>| -/-</h5>
        </div>
      </div>
    </div>
  );
}

export default Profile;
