import React from 'react';
import '../css/removeCandidate.css';
import Sidebar from './Sidebar';

function RemoveCandidate() {
  return (
    <>
  
  <Sidebar/>
  <div className="remove-candidate">
  <div className="container-registration">
    <div className="title">REMOVE CANDIDATE</div>
    <div className="content">
      <form action="#">
        <div className="user-details">
          <div className="input-box">
            <span className="details">Name</span>
            <input
              type="text"
              placeholder="Enter candidate's name"
              required=""
            />
          </div>
          <div className="input-box">
            <span className="details">Party</span>
            <input
              type="text"
              placeholder="Enter political party"
              required=""
            />
          </div>
          <div className="input-box">
            <span className="details">Date of Birth</span>
            <input type="date" placeholder="" required="" />
          </div>
        </div>
        <div className="button">
          <input type="submit" defaultValue="Remove Candidate" value="Remove Candidate"/>
        </div>
      </form>
    </div>
  </div>
</div>
</>

  )
}

export default RemoveCandidate