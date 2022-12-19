import React from "react";
import './Profile.css';

function Sozlamalar() {
    return (
        <div className='profile container mb-5'>
            <div className="d-flex justify-content-between">
                <h1>Zarina Nizomiddinova <span className="span">Starter</span></h1>
                <button className='btn btn-outline-primary h-25 d-flex justify-content-between align-items-center' style={{ width: '120px' }}>Chiqish <i class="ri-logout-box-r-line"></i></button>
            </div><br /><br />
            <div className="d-flex flex-column">
                <h3 style={{ borderBottom: '2px solid #086F6C', width: '50px' }}>Sozlamalar</h3>
            </div><br /><br />
            <form>
                <div className="d-flex justify-content-between w-75 mb-4">
                    <div class="col-md-5">
                        <label for="exampleInputEmail1" class="form-label">Ism</label>
                        <input type="email" value="Zarina"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="col-md-5">
                        <label for="exampleInputEmail1" class="form-label">Familiya</label>
                        <input type="email" value="Nizomiddinova" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                </div>
                <div className="d-flex justify-content-between w-75 mb-4">
                    <div class="col-md-5">
                        <label for="exampleInputEmail1" class="form-label">Nom</label>
                        <input type="email" value="Zari"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="col-md-5">
                        <label for="exampleInputEmail1" class="form-label">Telefon nomer</label>
                        <input type="email" value="+998 90 256 96 62" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                </div>
                <div className="d-flex justify-content-between w-75 mb-4">
                    <div class="col-md-5">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" value="Zari@gmail.com"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="col-md-5">
                        <label for="exampleInputEmail1" class="form-label">Mutaxassislik</label>
                        <input type="email" value="Nizomiddinova" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                </div>
                <div className="col-md-9 mb-4 d-flex flex-column">
                    <label className="mb-2">Biografiya</label>
                    <textarea cols="20" rows="5"></textarea>
                </div>
                <button type="submit" class="btn btn-primary" style={{background: '#118DA8'}}>Saqlash</button>
            </form>
        </div>
    );
}

export default Sozlamalar;
