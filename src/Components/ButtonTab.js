import React, { useState } from 'react';
import {isDisabled} from "@testing-library/user-event/dist/utils";
import { Button } from 'reactstrap';
import "../Styles/buttonTab.css";


const ButtonTab = ({text1,onClick}) => {
 
  return (
    <>
    <div className='footer'>
      

    
     
    <Button
   
     className='tab' onClick={onClick}>
        {text1}

    </Button>
   </div>
    
    </>
    
    
  );
}

export default ButtonTab
