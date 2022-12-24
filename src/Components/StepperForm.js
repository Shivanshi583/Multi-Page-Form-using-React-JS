import React, { useState } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import FormPreview from './FormPreview';
import {Col,Row} from "reactstrap";

import ButtonTab from './ButtonTab';
import "../Styles/stepperform.css";
import RoundButton from './RoundButton';



const StepperForm = () => {
  
  const[formData,setFormData] = useState({
    email:"",
    mobilenumber:"",
    addressline01:"",
    addressline02:"",
    pincode:"",
    state:"",
    plan:""

  });
  const[page,setPage] =useState(1);
  <RoundButton onClick={(e)=>{
    e.preventDefault();
    setPage((currPage)=>currPage-1);

  }}/>
 
  return (
    <>
    <div className='main'>
    <div className='header' >
        <div className='symbols'>
            <div className='symbol1'>
            </div>
            <div className='symbol2'>

            </div>
        </div>

      
        
        <div className='progress-bar '>
            <div className='div' style={{
              width:
              page===1
              ? "25%"
              : page===2
              ? "50%"
              :page===3
              ?"75%"
              :"100%",
            }}></div>
            
        </div>

    </div>
    <div className='prev'>
      {page!==1 ?
      <RoundButton
      onClick={(e) => {
        e.preventDefault();
        setPage((currPage)=>currPage-1);

      } }/>:null}
      <Row>
        <Col lg={8} md={8} sm={12}>
        <div className='main'>
      {
        page==1 ? <Page1 formData={formData} 
        setFormData={setFormData}/> : 
        page==2?<Page2/>:
        page==3?<Page3/>:<Page4 formData={formData}/>
      }
      </div>

        </Col>
      
      <Col lg={4} md={4} sm={12}>
        {page!==4?
         <FormPreview formData={formData}/>:null

        }
     

    </Col>


      </Row>
    
    

    </div>
   
    
   
   <div className='mt-5'>
   <ButtonTab text1={page!==4 ? "Next" : "Submit"} onClick={(e)=>{
    e.preventDefault();
   
      setPage((currPage) => currPage+1);
     
   
    }}/>

   </div>
  
    </div>
    
   

    
      
    </>
  );
};

export default StepperForm;
