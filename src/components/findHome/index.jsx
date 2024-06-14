import React from 'react'
import './findHomeStyle.css'
import find_img1 from 'assets/findhome1.png'
import find_img2 from 'assets/findhome2.png'
import find_img3 from 'assets/findhome3.png'
import find_img4 from 'assets/findhome 4.png'
import find_img5 from 'assets/findhome5.png'


const FindHome = () => {
  return (
    <div className='findhome_container'>
        <div className='findhome_text'>
            <h2>Find homes in popular neighbourhoods</h2>
            <p>Apartments in Lekki, Obalende, Agege & Yaba </p>
            
          <div className="grid_container">
            <div class="item1">
                <img src={find_img1} alt='info' className='img1' />
            </div>
            <div class="item2">
                <img src={find_img2} alt='info' className='img2' />
            </div>
            <div class="item3">
                <img src={find_img3} alt='info' className='img3' />
            </div>
            <div class="item4">
                <img src={find_img4} alt='info' className='img4' />
            </div>
            <div class="item5">
                <img src={find_img5} alt='info' className='img5' />
            </div>       
          </div>
        </div>
    </div>
  )
}

export default FindHome