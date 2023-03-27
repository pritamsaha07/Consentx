import './App.css';
import {useState, useEffect} from 'react';
import {ethers} from "ethers";
import abi from "./Consent.json";
import GiveConsent from './components/giveconsent';
import VerifyConsent from './components/verifyconsent';
import RevokeConsent from './components/revokeconsent';
function App() {
  
  const [state,setState]=useState({
    provider:null,
    signer:null,
    contract:null
  })

  useEffect(()=>{
    const connectWallet=async()=>{
      const contractAddress="0xb857782C7CadfD4555C131AD02f0D248854A74B1";
      const contractAbi=abi.abi;
      try{
        const{ethereum}=window;
        if(ethereum){
          const accounts=await ethereum.request({method:"eth_requestAccounts",})

        }
        const provider=new ethers.providers.Web3Provider(ethereum);
        const signer =provider.getSigner();
        const contract= new ethers.Contract(contractAddress,contractAbi,signer);
        setState({provider,signer,contract});
      }
      catch(error){
        console.log(error);
      }
    };
    connectWallet();

  },[]); 
  console.log(state);
  return (
    <div className="App">
     <h1>WEB-3.0 Consent </h1>
     <GiveConsent state={state}></GiveConsent>
     <RevokeConsent state={state} ></RevokeConsent>
     <VerifyConsent state={state} ></VerifyConsent>
    
    </div>
  );
}

export default App;
