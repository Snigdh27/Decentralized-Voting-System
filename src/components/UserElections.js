import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import '../css/user_elections.css';

import Sidebar from './Sidebar';
import SidebarUser from './SidebarUser';
import {ethers} from 'ethers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UserElections() {

  const [walletAddress,setWalletAddress]=useState('');
  const [connect_wallet,set_connect_wallet]=useState("Connect To Ethereum Account");


  async function requestAccount(){
    console.log('Requesting account...');

    if(window.ethereum){
      console.log('detected');

      try{
        const accounts=await window.ethereum.request({
          method:"eth_requestAccounts",
        });

        setWalletAddress(accounts[0]);
      }
      catch(error){
        console.log('Error Connecting..');
      }
    }
    else{
      alert('Metamask Not Detected');
    }

  }

  async function connectWallet(){
    if(typeof window.ethereum !== 'undefined'){
      await requestAccount();
      const provider=new ethers.providers.Web3Provider(window.ethereum);
      set_connect_wallet("Connected")
      // const address=walletAddress;
      toast.success('Metamask Connected Successfully!!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    }
  }

  return (
    <>
    <SidebarUser/>
  <div className="user-elections">
    <button class="btn btn--accept" onClick={connectWallet}
    >{connect_wallet}</button>
    <h3 className='wallet'>{walletAddress}</h3>
  <h1>Ongoing Elections</h1>
  <div className="dashboard-cards">
    <div className="card-container">
      <div className="card">
        <div className="content">
          <h2>01</h2>
          <h3>Election</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            excepturi reiciendis facere, officiis ullam. Illum iusto,
            repellendus itaque corrupti suscipit at!
          </p>
          <Link to="/user/voting-area">Cast Your Vote</Link>
          
        </div>
      </div>
      <div className="card">
        <div className="content">
          <h2>02</h2>
          <h3>Election</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            excepturi reiciendis facere, officiis ullam. Illum iusto,
            repellendus itaque corrupti suscipit at!
          </p>
          <Link to="/user/voting-area">Cast Your Vote</Link>
        </div>
      </div>
      <div className="card">
        <div className="content">
          <h2>03</h2>
          <h3>Election</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            excepturi reiciendis facere, officiis ullam. Illum iusto,
            repellendus itaque corrupti suscipit at!
          </p>
          <Link to="/user/voting-area">Cast Your Vote</Link>
        </div>
      </div>
    </div>
  </div>
  </div>
  <ToastContainer/>
</>

  )
}

export default UserElections
// export {address};