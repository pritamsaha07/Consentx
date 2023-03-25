import {ethers} from "ethers";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const GiveConsent=({state})=>{
    const giveconsent=async(event)=>{
        event.preventDefault()
        const {contract}=state;
        const id=document.querySelector('#id').value;
        const holder=document.querySelector('#holder').value;
        const issuer=document.querySelector('#issuer').value;
        const verifier=document.querySelector('#Verifier').value;
        console.log(id,holder,issuer,verifier);

        const transaction=await contract.giveConsent(id,holder,issuer,verifier);
        await transaction.wait();
        console.log("Transaction is done");
    }
    return<>
   <div>
   <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control id="id" type="id" placeholder="Enter you ID" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
       
        <Form.Control  id="holder" type="message" placeholder="Enter Holder Address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
       
        <Form.Control  id="issuer" type="message" placeholder="Enter Issuer Address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
       
        <Form.Control  id="Verifier" type="message" placeholder="Enter Verifier Address" />
      </Form.Group>
    </Form>
   </div>
    
   <Button variant="success" type="submit" onClick={giveconsent}>Give Cosent</Button>{' '}
    
    </>
}
export default GiveConsent;