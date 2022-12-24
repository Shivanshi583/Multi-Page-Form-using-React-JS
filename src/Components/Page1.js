import React,{useState} from 'react';
import "../Styles/Page1.css";
import {Button, Row,Col} from "reactstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {schema} from "./schema/FormSchema"




const Page1 = ({formData,setFormData}) => {
    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState("Select your plan");
    const options =["one" ,"pro","plux", "max","grand"];
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    });

    const formSubmitHandler = (data) => {
      console.log(data);
    };
    
   
  return (

<>
   
    <div className='card__main'>
      
   <div className='greeting '>
        <h4>Choose your plan</h4>
        <p>Hello Anisha,<br/>
      Increase yours and your family's health insurance cover by
       <span>₹20 lakhs</span> with
        
        <br/>
         Super top-up!
        </p>
    
    </div>
    {/* card One */}
    <div className='card__one'>
     <div className='card__header'>
      <h5>Plan details</h5>
      <span><i class="ri-arrow-up-s-line"></i></span>
     </div>
     
     <div className='card__body'>
        <h6>Your plan type</h6>
        <div className='dropdown'>
            <div 
            className='dropdown__btn'
            onClick={(e)=>
            setIsActive(!isActive)}>
                {selected}
                <span className='fw-bold'>
                    <i class="ri-arrow-down-s-line"></i>
                </span>
                </div>
               {isActive &&(


        <div className='dropdown__content'>
            {
                options.map((option)=>(
                    <div className='dropdown__item' 
               onClick={(e)=>{
                setSelected(option);
                setIsActive(false)}}
                
                required
                onChange={(e)=>
               setFormData({...formData,
               plan:e.target.value })}>
                  {option}
                  
                  </div>

                ))
            }
            
               
                 </div>

               )}
        </div>
        </div>
        </div>
      {/* Card one Ends */}

      {/* Card Two Starts */}
      <div className='card__two'>
      <Button className='card__header2'>
            <h5>Basic details (Required)</h5>
            <span><i class="ri-arrow-up-s-line"></i></span>
            </Button>
            <div className='card__body2'>
            <div className='card__content'>
             <form className='formi' 
             onSubmit={handleSubmit(formSubmitHandler)} >
                <Row>
                    <Col md={6}>
                   
                      <div className='fields'> 
                     <label>Personal Email Adress</label>
                 <input placeholder="Enter"
                  {...register("email")}
                 type="email"
                 name="email"
                 id="email"
                 value={formData.email}
                 required
                 onChange={(e)=>
                setFormData({...formData,
                email:e.target.value })}
                 
                
               />
                {errors.email ? (
            <span className="text-red-900">{errors.email.message}</span>
          ) : (
            <></>
          )}
                      </div> 
                    </Col>
                    <Col md={6}>
                   
                    <div className='fields'> 
                     <label>Mobile Number</label>
                 <input placeholder="Enter"
                 {...register("mobileNumber")}
                 type="number"
                 name="mobilenumber"
                 id="mobilenumber"
                 value={formData.mobilenumber}
                 required
                 onChange={(e)=>
                setFormData({...formData,
                  mobilenumber:e.target.value })}
                 />
                  {errors.mobilenumber ? (
            <span className="text-red-900">
              {errors.mobilenumber.message}</span>
          ) : (
            <></>
          )}
                      </div> 
                    </Col>
                </Row>
                  <Row>
                    <Col md={6}>
                 
                    <div className='fields'> 
                     <label> Address Line 01</label>
                 <input 
                 {...register("addressline01")}
                   type="text"
                   placeholder="Enter"
                   id="addressline01"
                   name="addressline01"
                   value={formData.addressline01}
                   required
                   onChange={(e)=>
                  setFormData({...formData,
                   addressline01:e.target.value })}/>
                    {errors.addressline01 ? (
            <span className="text-red-900">
              {errors.addressline01.message}</span>
          ) : (
            <></>
          )}
                      </div> 

                    </Col>
                    <Col md={6}>
                    
              
                <div className='fields'> 
                     <label>Address Line 02</label>
                 <input
                  {...register("addressline01")}
                 type="text"
                  placeholder="Enter"
                  id="addressline02"
                  name="addressline02"
                  value={formData.addressline02}
                  required
                  onChange={(e)=>
                 setFormData({...formData,
                  addressline02:e.target.value })}
                  />

                   {errors.addressline02? (
            <span className="text-red-900">
              {errors.addressline02.message}</span>
          ) : (
            <></>
          )}
                      </div> 
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                   
                    <div className='fields'> 
                     <label>Pin Code</label>
                 <input 
                  {...register("pincode")}
                 type="number"
                 placeholder="Enter"
                 id="pincode"
                 name=" pincode"
                 value={formData.pincode}
                 required
                 onChange={(e)=>
                setFormData({...formData,
                  pincode:e.target.value })}/>
                  {errors.pincode? (
            <span className="text-red-900">
              {errors.pincode.message}</span>
          ) : (
            <></>
          )}
                      </div> 
                    </Col>
                    <Col md={6}>
            
                    <div className='fields'> 
                     <label>State</label>
                 <input 
                  {...register("state")}
                 type="text"
                 placeholder="Enter"
                 id="state"
                 name="state"
                 value={formData.state}
                 required
                 onChange={(e)=>
                setFormData({...formData,
                  state:e.target.value })}/>
                  {errors.state? (
            <span className="text-red-900">
              {errors.state.message}</span>
          ) : (
            <></>
          )}
                      </div> 
                    </Col>
                  </Row>
                   
                    
               
             </form>
            </div>
            </div>

      </div>
      {/* cardtwo end */}
   </div>
  
        
       

    

</>

   
  
   
  );
};

export default Page1
