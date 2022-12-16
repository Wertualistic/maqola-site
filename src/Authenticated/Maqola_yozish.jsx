import React from 'react'

function Maqola_yozish() {
  return (
    <>
        <div className='container d-flex justify-content-between'>
            <h1>Maqola yozish</h1>
            <button className='btn d-flex justify-content-center align-items-center' style={{borderRadius: '30px', height: '30px', width: '150px', background: '#D9D9D9'}}>Chop Etish</button>
        </div>
        <div className="container">
            <div className="ms-5 mt-5">
                <h2><input type="text" placeholder='Mavzu:' style={{border: 'none', outline: 'none'}}/></h2>
            </div>
            <div className="d-flex ms-5 align-items-center justify-content-start mt-3">
                <i class="ri-add-circle-line h4"></i>
                <h4><input type="text" placeholder='Maqola yozish...' style={{border: 'none', outline: 'none'}}/></h4>
            </div>
        </div>
    </>
  )
}

export default Maqola_yozish