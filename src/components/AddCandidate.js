import React from 'react';
import '../css/addCandidate1.css';
import Sidebar from './Sidebar';

function AddCandidate() {


  return (
    <>
  <Sidebar title="Admin"/>
  <div className="add-candidate">
  <div className="container-registration">
    <div className="title">ADD CANDIDATE</div>
    <br />
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
          <div className="input-box">
            <span className="details">Experience</span>
            <input
              type="text"
              placeholder="Enter candidate's experience"
              required=""
            />
          </div>
        </div>
        <div className="button">
          <input type="submit" defaultValue="Add Candidate" value="Add Candidate"/>
        </div>
      </form>
    </div>
  </div>
  </div>
</>

  )
}

export default AddCandidate