import React from 'react';
import "../Styles/Page4.css";
import RoundButton from './RoundButton';

const Page4 = ({formData}) => {
    const tags =["Plan Selected" ,"Mobile Number",
    "Address Line 01", "Pin Code","State"];
  return (
    <>
   
    <div className='greeting4'>
        <h3>Review and Confirm Payment</h3>
    </div>

 
    
    <div className='review__content'>
    <div className='review__tag'>
           <h6>Plan Selected</h6>
           
         <span >{formData.plan}</span>
        
            </div>
            
            <div className='review__tag'>
           <h6>Mobile Number</h6>
           
         <span >{formData.mobilenumber}</span>
        
            </div>
            <div className='review__tag'>
           <h6>Address Line01</h6>
         <span>{formData.addressline01}</span>
        
            </div>
           
            <div className='review__tag'>
           <h6>Pin Code</h6>
         <span>{formData.pincode}</span>
        
            </div>
            <div className='review__tag'>
           <h6>State</h6>
         <span>{formData.state}</span>
        
            </div>
            </div>
        

    </>
    
   
  );

};

export default Page4
