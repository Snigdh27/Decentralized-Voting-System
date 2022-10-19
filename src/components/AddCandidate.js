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
            <span className="details">Experience</span>
            <input
              type="text"
              placeholder="Enter candidate's experience"
              required=""
            />
          </div>
          <div className="input-box">
            <span className="details">Avatar URL</span>
            <input
              type="text"
              placeholder="Enter candidate's image url"
              required=""
            />
          </div>
          
          <div className="input-box">
            <span className="details">Candidate's Experience</span>
            <input
              type="text"
              placeholder="Enter candidate's experience"
              required=""
            />
          </div>
          <div className="input-box">
            <span className="details">Candidate's Region</span>
            <input
              type="text"
              placeholder="Enter candidate's region"
              required=""
            />
          </div>
          <div className="input-box">
            <span className="details">Candidate's District</span>
            <input
              type="text"
              placeholder="Enter candidate's district"
              required=""
            />
          </div>
          <div className="input-box">
            <span className="details">Candidate's Age</span>
            <input
              type="number"
              placeholder="Enter candidate's description"
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