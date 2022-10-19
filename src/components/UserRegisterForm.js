import React from 'react'
import { useState } from 'react';
import '../css/user_register.css';
import Sidebar from './Sidebar';
import SidebarUser from './SidebarUser';
import { auth } from './firebase';
import swal from 'sweetalert';
import {RecaptchaVerifier,signInWithPhoneNumber } from 'firebase/auth';
auth.languageCode='it';
function UserRegisterForm() {

  const countryCode="+91";
  const [phoneNumber,setPhoneNumber]=useState(countryCode);
  const [expandForm,setExpandForm]=useState(false);
  const [OTP,setOTP]=useState('');

  const generateRecaptcha=()=>{
    window.recaptchaVerifier=new RecaptchaVerifier('recaptcha-container',{
      'size':'invisible',
      'callback':(response)=>{

      }
    },auth);
  }

  const requestOTP=(e)=>{
    e.preventDefault();
    if(phoneNumber.length>=12){
      setExpandForm(true);
      generateRecaptcha();
      let appVerifier=window.recaptchaVerifier;      signInWithPhoneNumber(auth,phoneNumber,appVerifier)
      .then(confirmationResult=>{
        window.confirmationResult=confirmationResult;
      }).catch((error)=>{
        console.log(error);
      })
    }
  }

  const verifyOTP=(e)=>{
    let otp=e.target.value;
    setOTP(otp);
    if(otp.length===6){
      let confirmationResult=window.confirmationResult;
      confirmationResult.confirm(otp).then((result)=>{
        const user=result.user;
      }).catch((error)=>{

      })
    }
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
            <input type="text" placeholder="Enter your number" required="" value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}}/>
            <div className="button1" onSubmit={successMessage}>
          <input type="submit" defaultValue="OTP" value="OTP"  />
        </div>

        

          </div>

          <div className="input-box">
            <span className="details">OTP</span>
            <input type="text" placeholder="Enter OTP" required="" />
            <div className="button2 button1">
          <input type="submit" defaultValue="Verify OTP" value="Verify OTP" />
        </div>
        </div>
         
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
          <input type="submit" defaultValue="Register" value="Register" />
        </div>
        <div id="recaptcha-container"></div>
      </form>
    </div>
  </div>
  </div>

  

</>

  )
}

export default UserRegisterForm
