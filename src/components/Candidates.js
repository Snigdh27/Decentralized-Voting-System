import React from 'react';
import '../css/voting.css';

import { useState } from "react";
import { ethers } from "ethers";
import { Link } from 'react-router-dom';

const startPayment = async ({ setError, setTxs, ether, addr }) => {
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress(addr);
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether)
    });
    console.log({ ether, addr });
    console.log("tx", tx);
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
  }
};

function Candidates(props) {

  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setError();
    await startPayment({
      setError,
      setTxs,
      ether: "0.0000001",
      addr: "0x45643d4C54775597D9D8FA91a546183308CDEF22"
    });
  };

  return (
    <>
    <div className="profile-card-1">
      <div className="img">
        <img src={props.imgUrl} />
      </div>
      <a className="view-more" href="">
        {/* <i className="fa fa-plus-circle" aria-hidden="true" /> */}
        <div className="popup" />
      </a>
      <div className="mid-section">
        <div className="name">{props.candidateName}</div><br />
        <div className="description">
          {props.description}<a href="">{props.party}</a>
        </div>
        <div className="line" />
        <div className="stats">
        <form onSubmit={handleSubmit}>
        <input className="stat upvoting" style={{color:"white",backgroundColor:"#161623"}} type="submit" value="Vote"/>
        
        <Link to="/user/elections"> Upvote</Link>
        <i className='bx bxs-upvote icon'/>
          {/* </button> */}
          </form>
        </div>
      </div>

    </div>

    <div className="profile-card-2 profile-card-1">
    <div className="name" style={{marginTop:"50px",fontSize:"1.40rem"}}>{props.candidateName}</div>
    <br />
    <div className="description"style={{marginTop:"20px",fontSize:"1rem"}}>
          <ul>
            
            <br />
          
            <br />
            <li>Party : {props.party}</li>
            <br />
            <li>State : {props.state}</li>
            <br />
            <li>District : {props.district}</li>
          </ul>
        </div>
    </div>

    </>
  )
}

export default Candidates