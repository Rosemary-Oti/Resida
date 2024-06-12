import React from 'react'
import './fpStyle.css'
import fp_img1 from "assets/feature_properties_img1.png";
import fp_img2 from "assets/feature_properties_img2.png";
import fp_img3 from "assets/feature_properties_img3.png";

const FeaturedProperties = () => {
  return (
    <section className='fp_container'>
<div className='fp_innercontainer'>
    <h2 className='fp_title'>{'Featured Properties'}</h2>
    <p className='fp_subtitle'>
     {'Explore our curated selection of premier properties, meticulously chosen to suit every lifestyle and budget. From luxurious penthouses to cozy family homes, our featured listings showcase the best of Lagos living.'}   
    </p>
</div>
<div className='fp_box_container'>
    <div className='box_1'>
    <img src={fp_img1} alt="info" className='image'  />
    <div className='inner_box_container1'>
      <p className='fp_p1'>
        Lillian Pepple Estate
      </p>
      <div className='fp_span1'>
      <span>Duplexes</span>Bungalows<span>Self-Contains</span>
      </div>
      <p>From NGN1,500,000/year</p>
      <div className='fp_svg1'>
      <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_b_5181_195)">
<path d="M4.83203 13.5C5.63203 15.1 9.16536 17.8333 10.832 19L14.332 17L17.832 13.5L19.332 11L19.832 7.5L19.332 5.5L18.332 4.5L15.832 3L13.332 3.5L11.332 5L10.832 4.5L8.83203 3L4.83203 4C4.16536 5.16667 2.83203 7.1 2.83203 7.5C2.83203 8 3.83203 11.5 4.83203 13.5Z" fill="black" fill-opacity="0.51"/>
</g>
<path d="M19.1249 4.22473C18.6231 3.61752 17.9928 3.12918 17.2795 2.79489C16.5662 2.46059 15.7877 2.28866 14.9999 2.29148C13.6521 2.25067 12.3399 2.72799 11.3333 3.62523C10.3266 2.72799 9.01442 2.25067 7.66659 2.29148C6.87885 2.28866 6.10029 2.46059 5.38699 2.79489C4.6737 3.12918 4.04343 3.61752 3.54159 4.22473C2.668 5.2844 1.75409 7.20298 2.36 10.3297C3.32709 15.3228 10.5788 19.4203 10.885 19.5881C11.0215 19.6642 11.1752 19.7041 11.3314 19.7041C11.4877 19.7041 11.6414 19.6642 11.7778 19.5881C12.0858 19.4166 19.3376 15.3191 20.3028 10.3297C20.9124 7.20298 19.9985 5.2844 19.1249 4.22473ZM18.5071 9.98139C17.8233 13.5115 12.8531 16.795 11.3333 17.7281C9.19192 16.4356 4.78642 13.1906 4.164 9.98139C3.69375 7.5559 4.33725 6.14698 4.96059 5.39165C5.29022 4.99391 5.7038 4.67406 6.17165 4.45504C6.63949 4.23601 7.15001 4.12324 7.66659 4.12481C8.21832 4.08343 8.77136 4.18573 9.27179 4.42173C9.77222 4.65772 10.203 5.01937 10.522 5.4714C10.6007 5.61617 10.7167 5.73719 10.8581 5.82185C10.9995 5.90651 11.1609 5.95172 11.3257 5.95275C11.4905 5.95377 11.6525 5.9106 11.7949 5.82771C11.9373 5.74482 12.0549 5.62526 12.1353 5.48148C12.4538 5.02593 12.8854 4.66123 13.3877 4.42333C13.8901 4.18542 14.4457 4.08254 14.9999 4.12481C15.5176 4.12229 16.0293 4.23461 16.4984 4.45367C16.9674 4.67272 17.382 4.99308 17.7123 5.39165C18.3338 6.14698 18.9773 7.5559 18.5071 9.98139Z" fill="white"/>
<defs>
<filter id="filter0_b_5181_195" x="-21.168" y="-21" width="65" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="12"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_5181_195"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_5181_195" result="shape"/>
</filter>
</defs>
</svg>

      </div>
    </div>
    </div>
    <div className='box_2'>
    <img src={fp_img2} alt="info" className='image'  />
    <div className='inner_box_container2'>
      <p className='fp_p2'>
        Naanchin Homes
      </p>
      <div className='fp_span2'>
      <span>Bedrooms flats</span>Bungalows<span>Student Accommodations</span>
      </div>
      <p>From NGN500,000/year</p>
      <div className='fp_svg2'>
      <svg width="47" height="24" viewBox="0 0 47 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_b_5194_193)">
<path d="M28.832 13.5C29.632 15.1 33.1654 17.8333 34.832 19L38.332 17L41.832 13.5L43.332 11L43.832 7.5L43.332 5.5L42.332 4.5L39.832 3L37.332 3.5L35.332 5L34.832 4.5L32.832 3L28.832 4C28.1654 5.16667 26.832 7.1 26.832 7.5C26.832 8 27.832 11.5 28.832 13.5Z" fill="black" fill-opacity="0.51"/>
</g>
<path d="M43.1249 4.22473C42.6231 3.61752 41.9928 3.12918 41.2795 2.79489C40.5662 2.46059 39.7877 2.28866 38.9999 2.29148C37.6521 2.25067 36.3399 2.72799 35.3333 3.62523C34.3266 2.72799 33.0144 2.25067 31.6666 2.29148C30.8788 2.28866 30.1003 2.46059 29.387 2.79489C28.6737 3.12918 28.0434 3.61752 27.5416 4.22473C26.668 5.2844 25.7541 7.20298 26.36 10.3297C27.3271 15.3228 34.5788 19.4203 34.885 19.5881C35.0215 19.6642 35.1752 19.7041 35.3314 19.7041C35.4877 19.7041 35.6414 19.6642 35.7778 19.5881C36.0858 19.4166 43.3376 15.3191 44.3028 10.3297C44.9124 7.20298 43.9985 5.2844 43.1249 4.22473ZM42.5071 9.98139C41.8233 13.5115 36.8531 16.795 35.3333 17.7281C33.1919 16.4356 28.7864 13.1906 28.164 9.98139C27.6938 7.5559 28.3373 6.14698 28.9606 5.39165C29.2902 4.99391 29.7038 4.67406 30.1716 4.45504C30.6395 4.23601 31.15 4.12324 31.6666 4.12481C32.2183 4.08343 32.7714 4.18573 33.2718 4.42173C33.7722 4.65772 34.203 5.01937 34.522 5.4714C34.6007 5.61617 34.7167 5.73719 34.8581 5.82185C34.9995 5.90651 35.1609 5.95172 35.3257 5.95275C35.4905 5.95377 35.6525 5.9106 35.7949 5.82771C35.9373 5.74482 36.0549 5.62526 36.1353 5.48148C36.4538 5.02593 36.8854 4.66123 37.3877 4.42333C37.8901 4.18542 38.4457 4.08254 38.9999 4.12481C39.5176 4.12229 40.0293 4.23461 40.4984 4.45367C40.9674 4.67272 41.382 4.99308 41.7123 5.39165C42.3338 6.14698 42.9773 7.5559 42.5071 9.98139Z" fill="white"/>
<defs>
<filter id="filter0_b_5194_193" x="2.83203" y="-21" width="65" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="12"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_5194_193"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_5194_193" result="shape"/>
</filter>
</defs>
</svg>

      </div>
    </div>
    </div>
    <div className='box_3'>
    <img src={fp_img3} alt="info" className='image' />
    <div className='inner_box_container3'>
      <p className='fp_p3'>
        Horeb Accomodations
      </p>
      <div className='fp_span3'>
      <span>Mansions</span>Bungalows<span>Office spaces</span>
      </div>
      <p>From NGN2,500,000/year</p>
      <div className='fp_svg3'>
      <svg width="47" height="24" viewBox="0 0 47 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_b_5194_193)">
<path d="M28.832 13.5C29.632 15.1 33.1654 17.8333 34.832 19L38.332 17L41.832 13.5L43.332 11L43.832 7.5L43.332 5.5L42.332 4.5L39.832 3L37.332 3.5L35.332 5L34.832 4.5L32.832 3L28.832 4C28.1654 5.16667 26.832 7.1 26.832 7.5C26.832 8 27.832 11.5 28.832 13.5Z" fill="black" fill-opacity="0.51"/>
</g>
<path d="M43.1249 4.22473C42.6231 3.61752 41.9928 3.12918 41.2795 2.79489C40.5662 2.46059 39.7877 2.28866 38.9999 2.29148C37.6521 2.25067 36.3399 2.72799 35.3333 3.62523C34.3266 2.72799 33.0144 2.25067 31.6666 2.29148C30.8788 2.28866 30.1003 2.46059 29.387 2.79489C28.6737 3.12918 28.0434 3.61752 27.5416 4.22473C26.668 5.2844 25.7541 7.20298 26.36 10.3297C27.3271 15.3228 34.5788 19.4203 34.885 19.5881C35.0215 19.6642 35.1752 19.7041 35.3314 19.7041C35.4877 19.7041 35.6414 19.6642 35.7778 19.5881C36.0858 19.4166 43.3376 15.3191 44.3028 10.3297C44.9124 7.20298 43.9985 5.2844 43.1249 4.22473ZM42.5071 9.98139C41.8233 13.5115 36.8531 16.795 35.3333 17.7281C33.1919 16.4356 28.7864 13.1906 28.164 9.98139C27.6938 7.5559 28.3373 6.14698 28.9606 5.39165C29.2902 4.99391 29.7038 4.67406 30.1716 4.45504C30.6395 4.23601 31.15 4.12324 31.6666 4.12481C32.2183 4.08343 32.7714 4.18573 33.2718 4.42173C33.7722 4.65772 34.203 5.01937 34.522 5.4714C34.6007 5.61617 34.7167 5.73719 34.8581 5.82185C34.9995 5.90651 35.1609 5.95172 35.3257 5.95275C35.4905 5.95377 35.6525 5.9106 35.7949 5.82771C35.9373 5.74482 36.0549 5.62526 36.1353 5.48148C36.4538 5.02593 36.8854 4.66123 37.3877 4.42333C37.8901 4.18542 38.4457 4.08254 38.9999 4.12481C39.5176 4.12229 40.0293 4.23461 40.4984 4.45367C40.9674 4.67272 41.382 4.99308 41.7123 5.39165C42.3338 6.14698 42.9773 7.5559 42.5071 9.98139Z" fill="white"/>
<defs>
<filter id="filter0_b_5194_193" x="2.83203" y="-21" width="65" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="12"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_5194_193"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_5194_193" result="shape"/>
</filter>
</defs>
</svg>

      </div>
    </div>
    </div>
</div>
    </section>
  )
}

export default FeaturedProperties