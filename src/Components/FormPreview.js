import React from 'react';
import "../Styles/formPreview.css";

const FormPreview = ({formData}) => {
    const foptions =["Personal Email Adress", "Mobile Number","Address Line 01",
    "Address Line 02" ,"State", " PinCode"]
  return (
    <div className='form__preview'>
        <div className='formp__header'>
          <h5>Form Preview</h5>  
        </div>

        <div className='formp__content'>
            <div className='formp__tag'>
           <h6>Personal Email Address</h6>
           <span >{formData.email}</span>
         
        
            </div>
            <div className='formp__tag'>
           <h6>Mobile Number</h6>
           
         <span >{formData.mobilenumber}</span>
        
            </div>
            <div className='formp__tag'>
           <h6>Address Line01</h6>
         <span>{formData.addressline01}</span>
        
            </div>
            <div className='formp__tag'>
           <h6>Address Line 02</h6>
         <span>{formData.addressline02}</span>
        
            </div>
            <div className='formp__tag'>
           <h6>Pin Code</h6>
         <span>{formData.pincode}</span>
        
            </div>
            <div className='formp__tag'>
           <h6>State</h6>
         <span>{formData.state}</span>
        
            </div>
        

        

        </div>

      
    </div>
  )
}

export default FormPreview
