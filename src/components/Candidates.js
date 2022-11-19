import React from 'react';
import '../css/voting.css';
import jsPDF from 'jspdf';
import {render} from "react-dom"
import { useState } from "react";
import { ethers } from "ethers";
import { Link } from 'react-router-dom';
import {renderToString} from "react-dom/server";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const styles = {
//   fontFamily: "sans-serif",
//   textAlign: "center"
// };
// const colstyle = {
//   width: "30%"
// };
// const tableStyle = {
//   width: "100%"
// };
// const Prints = () => (
//   <div>

//     <h3>Time & Materials Statement of Work (SOW)</h3>
    
//     <h4>General Information</h4>
//     <table id="tab_customers" class="table table-striped" style={tableStyle}>
//       <colgroup>
//         <col span="1" style={colstyle} />
//         <col span="1" style={colstyle} />
//       </colgroup>
//       <thead>
//         <tr class="warning">
//           <th>SOW Creation Date</th>
//           <th>SOW Start Date</th>
//           <th>Project</th>
//           <th>Last Updated</th>
//           <th>SOW End Date</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>Dec 13, 2017</td>
//           <td>Jan 1, 2018</td>
//           <td>NM Connect - NMETNMCM</td>
//           <td>Dec 13, 2017</td>
//           <td>Dec 31, 2018</td>
//         </tr>
//       </tbody>
//     </table>
//     <p>
//       This is a Time and Materials Statement of Work between Northwestern Mutual
//       Life Insurance Company and Infosys with all general terms and conditions
//       as described in the current Master Agreement and its related documents
//     </p>
//   </div>
// );

// const print = () => {
//   const string = renderToString(<Prints />);
//   const pdf = new jsPDF("p", "mm", "a4");
//   const columns = [
//     "SOW Creation Date",
//     "SOW Start Date",
//     "Project",
//     "Last Updated",
//     "SOW End Date"
//   ];
//   var rows = [
//     [
//       "Dec 13, 2017",
//       "Jan 1, 2018",
//       "ABC Connect - ABCXYZ",
//       "Dec 13, 2017",
//       "Dec 31, 2018"
//     ]
//   ];
//   pdf.fromHTML(string);
//   pdf.save("pdf");
// };


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
    toast.success("Transaction Successful");
    toast("Click on Upvote for final step")
    console.log("tx", tx);
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
  }
};

function Candidates(props) {

  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    
  };
  const colstyle = {
    width: "30%"
  };
  const tableStyle = {
    width: "100%"
  };
  const Prints = () => (
    <div>
  
      <h1>#-----Decentralized Voting System-----#</h1>
      <br/>
      <br/>
      <h2>Voting Receipt</h2>

      <h3>------------------------------------------------------------------------------------------</h3>
      <br/>
      {/* <table id="tab_customers" class="table table-striped" style={tableStyle}>
        <colgroup>
          <col span="1" style={colstyle} />
          <col span="1" style={colstyle} />
        </colgroup>
        <thead>
          <tr class="warning">
            <th>SOW Creation Date</th>
            <th>SOW Start Date</th>
            <th>Project</th>
            <th>Last Updated</th>
            <th>SOW End Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.candidateName}</td>
            <td>Jan 1, 2018</td>
            <td>NM Connect - NMETNMCM</td>
            <td>Dec 13, 2017</td>
            <td>Dec 31, 2018</td>
          </tr>
        </tbody>
      </table> */}
      <h3>Candidate : {props.candidateName}</h3>
      <h3>Party : {props.party}</h3>
      <h3>District : {props.district}</h3>
      <h3>State : {props.state}</h3>
      <br/>
      <h3>------------------------------------------------------------------------------------------</h3>

      <br/>
      <h1> # Responsible Voter # </h1>
      <br/>
      <h4>
        
          <p>"Voting is not just our right but our duty as well", this saying goes a long way<br/> as it tells us clearly we have responsibilities as citizens of the country. <br/>To make sure we citizens run and take good care of our country we must put in our votes</p>
          <p>A lot of time people choose to believe that single vote won't make much of a difference <br/>but that is far from the truth and people must realize it as soon as possible.</p>
       
      </h4>

    </div>
  );
  
  const print = () => {
    const string = renderToString(<Prints />);
    const pdf = new jsPDF("p", "mm", "a4");
    const columns = [
      "SOW Creation Date",
      "SOW Start Date",
      "Project",
      "Last Updated",
      "SOW End Date"
    ];
    var rows = [
      [
        "Dec 13, 2017",
        "Jan 1, 2018",
        "ABC Connect - ABCXYZ",
        "Dec 13, 2017",
        "Dec 31, 2018"
      ]
    ];
    pdf.fromHTML(string);
    pdf.save("Voting Receipt");
  };

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
      addr: "0xed75306F1C7d3c9a79463689dBBB8155BA9dF43E"
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
        &nbsp;&nbsp;&nbsp;
        <button className="stat upvoting" style={{color:"white",backgroundColor:"#161623"}} onClick={print} ><i className='bx bxs-upvote icon ' /></button>
        
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
        <ToastContainer />
    </div>
    <button className="stats stat upvoting" style={{color:"black"}} onClick={print}>Download Receipt</button>
    </>
  )
}

export default Candidates