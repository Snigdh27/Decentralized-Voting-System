import React from 'react'
import '../css/voting.css';
import swal from 'sweetalert';
import Sidebar from './Sidebar';
import SidebarUser from './SidebarUser';
import Candidates from './Candidates';

function UserVoting() {

  const successMessage=async(e)=>{
    e.preventDefault();
    swal({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
      button: "Aww yiss!",
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Registered Successfully for Voting!!!", {
          icon: "success",
        });
      } else {
        swal("Your data is saved!");
      }
    });
  }

  return (
    <>
  <SidebarUser/>
  <div className="user-voting">
  <section className="profile-cards">
    
     <Candidates imgUrl="https://i.pinimg.com/550x/4d/72/97/4d7297dad94265c0acbc3b677d418935.jpg" candidateName="Candidate-1" party="Party" experience="experience" age="AB" region="Region" district="District"/>
  </section>
  </div>
</>

  )
}

export default UserVoting
