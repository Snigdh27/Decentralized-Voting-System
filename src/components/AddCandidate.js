import React,{useState,useEffect} from 'react';
import '../css/addCandidate1.css';
import Sidebar from './Sidebar';
import fireDb from './firebase';
import {useNavigate,useParams} from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const initialState = {
  name: "",
  party:"",
  url:"",
  experience:"",
  region:"",
  district:"",
  age:"",
};


function AddCandidate() {

  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});
  

  const { name,party,url,experience,region,district,age} = state;
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !party || !url || !experience || !region || !district || !age ) {
            alert("Please provide value in each input field")
        }
        else {
            fireDb.child("voting_system").push(state, (err) => {
                if (err) {
                    alert(err);
                }
                else {
                    alert("Data Added Successfully");
                }
            });
            // setTimeout(() => history.push("/"), 500);
            setTimeout(() => navigate('/admin/candidate-details'), 500);
        }
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

  return (
    <>
  <Sidebar title="Admin"/>
  <div className="add-candidate">
  <div className="container-registration">
    <div className="title">ADD CANDIDATE</div>
    <br />
    <div className="content">
      <form onSubmit={handleSubmit}>
        <div className="user-details">
          <div className="input-box">
            <span className="details">Name</span>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter candidate's name"
              onChange={handleInputChange}
              required=""
              value={name}
            />
          </div>
          <div className="input-box">
            <span className="details">Party</span>
            <input
              type="text"
              id="party"
              name="party"
              placeholder="Enter political party"
              required=""
              onChange={handleInputChange}
              value={party}
            />
          </div>
          
          
          <div className="input-box">
            <span className="details">Avatar URL</span>
            <input
              type="text"
              id="url"
              name="url"
              placeholder="Enter candidate's image url"
              required=""
              onChange={handleInputChange}
              value={url}
            />
          </div>
          
          <div className="input-box">
            <span className="details">Candidate's Experience</span>
            <input
              type="text"
              id="experience"
              name="experience"
              placeholder="Enter candidate's experience"
              required=""
              onChange={handleInputChange}
              value={experience}
            />
          </div>
          <div className="input-box">
            <span className="details">Candidate's State</span>
            <input
              type="text"
              id="region"
              name="region"
              placeholder="Enter candidate's state"
              required=""
              onChange={handleInputChange}
              value={region}
            />
          </div>
          <div className="input-box">
            <span className="details">Candidate's District</span>
            <input
              type="text"
              id="district"
              name="district"
              placeholder="Enter candidate's district"
              required=""
              onChange={handleInputChange}
              value={district}
            />
          </div>
          <div className="input-box">
            <span className="details">Candidate's Age</span>
            <input
              type="text"
              id="age"
              name="age"
              placeholder="Enter candidate's age"
              required=""
              onChange={handleInputChange}
              value={age}
            />
          </div>
        </div>
        <div className="button">
          <input type="submit" defaultValue="Add Candidate" value="Add Candidate" />
        </div>
      </form>
    </div>
  </div>
  {/* <ToastContainer /> */}
  </div>
</>

  )
}

export default AddCandidate