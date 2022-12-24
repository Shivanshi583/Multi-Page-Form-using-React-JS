import React from 'react';
import "../Styles/roundbutton.css";
import{useNavigate} from 'react-router-dom';

const RoundButton = ({onClick}) => {
    
   
  return (
    <div className='circle' onClick={onClick}>
      <span>
        <i class="ri-arrow-left-s-line"></i>
      </span>
    </div>
  )
}

export default RoundButton
