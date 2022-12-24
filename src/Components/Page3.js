import React from 'react';
import "../Styles/Page3.css";
import {Row,Col,Form,FormGroup,
    Input,Label} from "reactstrap";

import FormPreview from './FormPreview';
import RoundButton from './RoundButton';


const Page3 = () => {
  return (
    <div className='page3'>
       
                   
                <div className='greeting3'>
                <h2>Declaration</h2>
                </div>
                
                <div className='checkboxes'>
                <Form>
                    <div className='checkbox'>
                    <FormGroup
                 check
                  inline
                  >
               <Input type="checkbox"/>
               <Label check>
                <p className='m-2'>I hereby declare that none of the proposed members are
                    <br/> habitual consumers of alcohol, tobacco, gutka or any
                    <br/> recreational drugs.</p>
               </Label>
                </FormGroup>
                    </div>
                    <div className='checkbox'>
                    <FormGroup
                  check
                inline
                   >
              <Input type="checkbox" />
                   <Label check>
                    <p className='m-2'>
                    I hereby declare that all proposed members are in good health 
                   <br/>and entirely free from any mental pf physical impairements or
                   <br/> deformities, disease/condition.
              
                    </p>
                   
             </Label>
           </FormGroup>

                    </div>
                    <div className='checkbox'>
                    <FormGroup
                  check
                inline
                   >
              <Input type="checkbox"/>
                   <Label check>
                    <p className='m-2'>
                    I have understood that there is 30 days waiting period for all
                   <br/> diseases and 2 years on named ailments. (list of named
                   <br/> ailements)

                    </p>
                  
              
             </Label>
           </FormGroup>

                    </div>
                    <div className='checkbox'>
                    <FormGroup
                  check
                inline
                   >
              <Input type="checkbox" />
                   <Label check>
                    <p className='m-2'>
                    I understand that this policy doesn't 
                   cover Pre-existing diseases.

                    </p>
                   
             </Label>
           </FormGroup>

                    </div>
               
               
               </Form>
                    
                </div>
           
      
    </div>
  )
}

export default Page3
