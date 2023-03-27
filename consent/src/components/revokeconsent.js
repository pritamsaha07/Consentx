import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';

const RevokeConsent=({state})=>{
  const handleupdate=()=>{
    alert("Transaction is done")
  }
    const revokeconsent=async(event)=>{
        event.preventDefault()
        const {contract}=state;
        const id=document.querySelector('#id2').value;
        const holder=document.querySelector('#holder2').value;
       
        console.log(id,holder);
        
        const transaction=await contract.revokeConsent(id,holder);
        await transaction.wait();
        console.log("Transaction is done");
        handleupdate();
        }
      
    return<>
   <div>
   <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control id="id2" type="id" placeholder="Enter you ID" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
       
        <Form.Control  id="holder2" type="message" placeholder="Enter Holder Address" />
      </Form.Group>
     
      
    </Form>
   </div>
    
   <Button variant="success" type="submit" onClick={revokeconsent}>Revoke Cosent</Button>{' '}
  
  
</>

}
export default RevokeConsent;