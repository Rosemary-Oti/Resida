import React from 'react'
import './infocard.css'
import Button from 'shared/button'
import { GoArrowRight } from "react-icons/go";
import circle1 from 'assets/circle1.svg'
import circle2 from 'assets/circle2.svg'
import circle3 from 'assets/circle3.svg'
import circle4 from 'assets/circle4.svg'
import CircleImage from './component/CircleImage';
// import info_image from 'assets/resida-info.svg'

function InfoCard(props) {
    const { title, subtitle, body, image, imageStyle, imageHeight, button, infoStyle, circle, circleStyletitle, circleStyleSubtitle, reverse  } = props;
  return (
<div className='info_container'>
        <div className='info_inner_container'>

            {reverse ? (
                <>
                 <div className='info_description'>
                <div className={infoStyle}>
                    {circle && (
                        <div className='info_circle'>
                        {/* <div className='info_circle_img'>
                            <img src={circle1} alt="infocircle" className='circle_img'/>
                        </div> */}
                        <CircleImage image={circle1}/>
                        <CircleImage image={circle2} style={{marginLeft:'-30px'}}/>
                        <CircleImage image={circle3} style={{zinedx:30, marginLeft:'-30px'}}/>
                        <CircleImage image={circle4} style={{marginLeft:'-30px', zinedx:40}}/>
                        </div>
                    )}
                    {circleStyletitle ? (
                        <h2 className='info_title'  style={{fontWeight: "600"}} >{title}</h2>
                        ) : (
                            <h2 className='info_title' >{title}</h2>  
                    )}

                    {circleStyleSubtitle ? (
                        <h2 className='info_subtitle'  style={{fontWeight:"300"}} >{subtitle}</h2>
                        ) : (
                            <h2 className='info_subtitle' >{subtitle}</h2>  
                    )}   
                
                <p className='info_body'>
                    {body}
                </p>
                {button ? (
                <Button 
                style={{
            width: "195px",
            color: '#1F4B43',
            padding: "7px 12px",
            backgroundColor: '#DBA94D'
            
           }} btnName={"Download our app"} 
           rightIcon={<GoArrowRight color='#1F4B43' size={25}/>}
           />
           ) : (
            ""
           )}
                </div>
            </div>
            <div className={imageStyle} >
                <img src={image} alt="info-image" className={imageHeight}/>
            </div>
                </>
                ) : (
                    <>
                    <div className={imageStyle} >
                <img src={image} alt="info-image" className={imageHeight}/>
            </div>
            <div className='info_description'>
                <div className={infoStyle}>
                    {circle && (
                        <div className='info_circle'>
                        {/* <div className='info_circle_img'>
                            <img src={circle1} alt="infocircle" className='circle_img'/>
                        </div> */}
                        <CircleImage image={circle1}/>
                        <CircleImage image={circle2} style={{marginLeft:'-30px'}}/>
                        <CircleImage image={circle3} style={{zinedx:30, marginLeft:'-30px'}}/>
                        <CircleImage image={circle4} style={{marginLeft:'-30px', zinedx:40}}/>
                        </div>
                    )}
                    {circleStyletitle ? (
                        <h2 className='info_title'  >{title}</h2>
                        ) : (
                            <h2 className='info_title' >{title}</h2>  
                    )}

                    {circleStyleSubtitle ? (
                        <h2 className={circleStyleSubtitle}  style={{fontWeight:"300"}} >{subtitle}</h2>
                        ) : (
                            <h2 className='info_subtitle' >{subtitle}</h2>  
                    )}   
                
                <p className='info_body'>
                    {body}
                </p>
                {button ? (
                <Button 
                style={{
            width: "195px",
            color: '#1F4B43',
            padding: "7px 12px",
            backgroundColor: '#DBA94D'
            
           }} btnName={"Download our app"} 
           rightIcon={<GoArrowRight color='#1F4B43' size={25}/>}
           />
           ) : (
            ""
           )}
                </div>
            </div>
                    </>
            )}

            
           
        </div>
    </div>




    // <div className='info_container'>
    //     <div className='info_inner_container'>
    //         <div className='info_image'>
    //             <img src={info_image} alt="info-image" className='image'/>
    //         </div>
    //         <div className='info_description'>
    //             <div className='info'>
    //             <h2 className='info_title'>Resida is Not Just an App</h2>
    //             <h2 className='info_subtitle'>We are an ecosystem with you at the center</h2>
    //             <p className='info_body'>
    //                 Resida aims to bridge the gap between potential tenants and 
    //                 available properties. This app is not just a tool; it's a solution 
    //                 for individuals and families who are navigating the challenging
    //                 terrain of apartment hunting in a new or familiar city.
    //             </p>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  )
}

export default InfoCard