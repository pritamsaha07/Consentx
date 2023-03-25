import {ethers} from "ethers";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';

const VerifyConsent=({state})=>{
   const [exist,setexist]=useState(false)
    const verifyconsent=async(event)=>{
        event.preventDefault()
        const {contract}=state;
        const id=document.querySelector('#id1').value;
        const holder=document.querySelector('#holder1').value;
        const verifier=document.querySelector('#Verifier1').value;
        console.log(id,holder,verifier);
        
        const transaction=await contract.verifyConsent(id,holder,verifier);
        setexist(transaction)
        console.log(exist)
        console.log(transaction)
        
        }
      
    return<>
   <div>
   <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control id="id1" type="id" placeholder="Enter you ID" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
       
        <Form.Control  id="holder1" type="message" placeholder="Enter Holder Address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
       
      <Form.Control  id="Verifier1" type="message" placeholder="Enter Verifier Address" />
      </Form.Group>
    </Form>
   </div>
    
   <Button variant="success" type="submit" onClick={verifyconsent}>Verify Cosent</Button>{' '}
   <div>
      {exist ? <p>Consent is given</p> : <p>Consent is not given</p>}
    </div>
   
</>

}
export default VerifyConsent;