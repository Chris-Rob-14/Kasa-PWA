import React, { useState } from "react";
import "./Slider.css";
import arrowLeft from "../../images/arrowLeft.svg";
import arrowRight from "../../images/arrowRight.svg";

function Slider({ pictures }) {
  const [current, setCurrent] = useState(0);
  const length = pictures.length;

  const prev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <div className="sliders">
      <img src={pictures[current]} className="slide-image" alt="slides" />
      {length > 1 ? (
        <>
        <span className='slider-counter'>
                {( current) ? current + 1 : 1 }
                { pictures.img && pictures.img.length }
            </span>
          <div className="left-arrow" onClick={prev}>
            <img src={arrowLeft} alt="" className="left-arrow" />
          </div>
          <div className="right-arrow" onClick={next}>
            <img src={arrowRight} alt="" className="right-arrow" />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Slider;