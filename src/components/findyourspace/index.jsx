import React from 'react';
import './fysStyle.css';
import space from "assets/find-your-space-img.png"
import Button from 'shared/button';

const FindYourSpace = () => {
  return (
    <div className='fys_container flex'>
        <section className='fys_image_section'>
        <img src={space} alt="info" className='image' />
        </section>
        <section className='fys_text_section'>
            <div>
                <p>{"Your dream home is only a few clicks away"}</p>
            </div>
            <div>
                <span>{"- Find your space now!"}</span>
            </div>
            <div className='fys_button'>
            <Button style={{
                 width: "100%",
                 fontSize: "16px",
                 color: "#1B2056",
                 fontWeight: "bold",
                 padding: "12px 34px",
                 borderRadius: "10px",
                 backgroundColor: "white",
            }}
            btnName={"Download app"} />
            </div>
        </section>
        
        </div>
  )
}

export default FindYourSpace;