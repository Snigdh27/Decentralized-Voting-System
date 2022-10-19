import React from 'react';
import '../css/voting.css';
import Sidebar from './Sidebar';
import Candidates from './Candidates';

function CandidateDetails() {
  return (
    <>
  <Sidebar title="Admin"/>
  <div className="candidate-details">
  <h1>Candidate Details</h1>
 
  <section className="profile-cards">
  <Candidates imgUrl="https://i.pinimg.com/550x/4d/72/97/4d7297dad94265c0acbc3b677d418935.jpg" candidateName="Candidate-1" about="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, quaerat libero ut iure ratione repudiandae ipsam neque amet reprehenderit magnam vel quae eaque sed obcaecati asperiores velit qui. Beatae aut, ipsum debitis culpa ea deserunt sequi molestiae esse fuga quos minus nam voluptas alias officiis quaerat, similique quae rem dicta." party="Party"/>
  </section>
  </div>
</>

  )
}

export default CandidateDetails