import React from 'react';
import '../css/createElection.css';
import Sidebar from './Sidebar';

function CreateElection() {
  return (
    <>
  <Sidebar/>
  <div className="create-election">
  <div className="container-registration">
    <div className="title">Create New Election</div>
    <div className="content">
      <form action="#">
        <div className="user-details">
          <div className="input-box">
            <span className="details">Type</span>
            <input
              type="text"
              placeholder="Enter the type of Election"
              required=""
            />
          </div>
          <div className="input-box">
            <span className="details">Organiser</span>
            <input
              type="text"
              placeholder="Enter organiser's details"
              required=""
            />
          </div>
          <div className="input-box">
            <span className="details">Start Date</span>
            <input type="date" placeholder="Enter the start date" required="" />
          </div>
          <div className="input-box">
            <span className="details">End Date</span>
            <input type="date" placeholder="Enter the end date" required="" />
          </div>
          <div className="input-box">
            <span className="details">Start Time</span>
            <input type="time" placeholder="Enter the start time" required="" />
          </div>
          <div className="input-box">
            <span className="details">End Time</span>
            <input type="time" placeholder="Enter the end time" required="" />
          </div>
        </div>
        <div className="button">
          <input type="submit" defaultValue="Create Election" />
        </div>
      </form>
    </div>
  </div>
</div>
</>

  )
}

export default CreateElection
