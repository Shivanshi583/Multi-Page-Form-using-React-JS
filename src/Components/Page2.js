import React from 'react';
import "../Styles/Page2.css";
import {Row,Col} from "reactstrap";
import FormPreview from './FormPreview';
import {Slider,Checkbox,FormGroup,FormControlLabel}
 from "@mui/material"
import RoundButton from './RoundButton';

const Page2 = () => {

    const marks = [
        {
          value: 0,
          label: '1L',
        },
        {
          value: 20,
          label: '2L',
        },
        {
          value: 30,
          label: '3L',
        },
        {
          value: 100,
          label: '5L',
        },
      ];

      


      function valuetext(value: number) {
        return `${value}L`;
      }
  return (
    <>
    <div className='page2'>
        
            
         <div className='greeting2'>
      <h2>Select your deductible amount</h2>
      <p>
      Select the deductible amount for the policy
       (or policies) below. <br/>(what is a deductible?)
      </p>
      </div>


      <div className='range'>
       <div className='range__header'>
        <h4>Self(Individual)</h4>
        <div >
            <span className='img__range'>
            <i class="ri-account-circle-line">
                John Doe
            </i>
            
            </span>
        </div>
       
       </div>
       <div className='range__content'>
            <p>
                Sum insured of ₹20,00,000 with
                 a deductible of ₹3,00,000
                 </p>

                 <Slider
          aria-label="Custom marks"
        defaultValue={2}
        getAriaValueText={valuetext}
       step={10}

      marks={marks}
      color="secondary"
         />
            </div>

      </div>

      <div className='check'>
      <FormGroup>
      <FormControlLabel control={<Checkbox 
      color="secondary" 
      />} label="I understand that this insurance will
         not be utilized until ₹3,00,000 (deductible) is 
    exhausted." />
    </FormGroup>
        </div>
           

           
           
           
    </div>
    
      
     
      
    </>
    
  )
}

export default Page2
