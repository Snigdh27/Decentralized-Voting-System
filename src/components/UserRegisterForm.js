import React from 'react'
import { useState } from 'react';
import '../css/user_register.css';
import Sidebar from './Sidebar';
import SidebarUser from './SidebarUser';
// import { auth } from './firebase';
import swal from 'sweetalert';
import {Link} from "react-router-dom";
import { firebase, auth } from './firebase';


function UserRegisterForm() {

  
  const [mynumber, setnumber] = useState("");
	const [otp, setotp] = useState('');
	const [show, setshow] = useState(false);
	const [final, setfinal] = useState('');

	// Sent OTP
	const signin = () => {

		if (mynumber === "" || mynumber.length < 10) return;

		let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
		auth.signInWithPhoneNumber(mynumber, verify).then((result) => {
			setfinal(result);
			alert("OTP Sent to your Mobile Number")
			setshow(true);
		})
			.catch((err) => {
				alert(err);
				window.location.reload()
			});
	}

	// Validate OTP
	const ValidateOtp = () => {
		if (otp === null || final === null)
			return;
		final.confirm(otp).then((result) => {
			// success
		}).catch((err) => {
			alert("Wrong code");
		})
	}

  const successMessage=async(e)=>{
    e.preventDefault();
    swal({
      title: "Are you sure?",
      text: "Once registered, you can't change the data further !!!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
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

  const otpverified=async(e)=>{
    e.preventDefault();
    swal("Good job!", "OTP Verified Successfully", "success");
  }

  return (
    <>
  <SidebarUser/>
  <div className="user-register-form">
  <div className="container-registration">
    <div className="title">Voter Registration Form</div>
    <br />
    <div className="content">
      <form onSubmit={successMessage}>
        <div className="user-details">
          <div className="input-box">
            <span className="details">Full Name</span>
            <input type="text" placeholder="Enter your name" required="" />
          </div>
          <div className="input-box">
            <span className="details">Aadhar Number</span>
            <input type="text" placeholder="Enter your username" required="" />
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input type="text" placeholder="Enter your email" required="" />
          </div>
          <div className="input-box">
            <span className="details">Phone Number</span>
            <input type="text" placeholder="Enter your number" required="" value={mynumber} onChange={(e)=>{setnumber(e.target.value)}}/>
            
            {/* <div className="button1" onClick={signin}>
          <input type="submit" defaultValue="OTP" value="OTP"  />
        </div> */}

        {/* <div id="recaptcha-container"></div>
					<button onClick={signin}>Send OTP</button> */}

          </div>

          {/* <div className="input-box">
            <span className="details">OTP</span>
            <input type="text" placeholder="Enter OTP" required="" onChange={(e)=>{
              setotp(e.target.value)
            }} />
            <button onClick={ValidateOtp}>Verify</button>
        </div> */}
         
          <div className="input-box">
            <span className="details">State</span>
            <input type="text" placeholder="Enter your state e.g. (Uttar Pradesh)" required="" />
          </div>
          <div className="input-box">
            <span className="details">District</span>
            <input type="text" placeholder="Enter your district e.g. (Ghaziabad)" required="" />
          </div>
          <div className="input-box">
            <span className="details">Date of Birth</span>
            <input type="date" placeholder="Enter your password" required="" />
          </div>
          <div className="input-box">
            <span className="details">Voter Id</span>
            <input
              type="text"
              placeholder="Enter your Voter-Id"
              required=""
            />
          </div>
        </div>
        <div className="gender-details">
          <input type="radio" name="gender" id="dot-1" />
          <input type="radio" name="gender" id="dot-2" />
          <input type="radio" name="gender" id="dot-3" />
          <span className="gender-title">Gender</span>
          <div className="category">
            <label htmlFor="dot-1">
              <span className="dot one" />
              <span className="gender">Male</span>
            </label>
            <label htmlFor="dot-2">
              <span className="dot two" />
              <span className="gender">Female</span>
            </label>
            <label htmlFor="dot-3">
              <span className="dot three" />
              <span className="gender">Prefer not to say</span>
            </label>
          </div>
        </div>
        <div className="button">
          <input type="submit" defaultValue="Register" value="Send OTP" onClick={signin} />
        </div>
        <div id="recaptcha-container"></div>
        {/* <button >Send OTP</button> */}

        {/* /*
        <div id="recaptcha-container"></div>
					<button onClick={signin}>Send OTP</button>

          </div>
        */ }

      </form>

      <form onSubmit={otpverified}>
      <div className="input-box">
      
            <span className="details">OTP</span>
            <input type="text" placeholder="Enter OTP" required="" onChange={(e)=>{
              setotp(e.target.value)
            }} />
             <div className="button">
          <input type="submit" defaultValue="Register" value="Verify OTP" />
        </div>
            <Link to="/user/elections"><div className="button">
          <input type="submit" defaultValue="Register" value="Go to Elections" onClick={signin} />
        </div>
            </Link>
        </div>
        
      </form>
    </div>
  </div>
  </div>

  

</>

  )
}

export default UserRegisterForm
