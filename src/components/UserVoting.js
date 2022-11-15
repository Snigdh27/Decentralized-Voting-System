import React,{useEffect,useState} from 'react'
import '../css/voting.css';
import fireDb from "./firebase";
import swal from 'sweetalert';
import Sidebar from './Sidebar';
import SidebarUser from './SidebarUser';
import Candidates from './Candidates';
// import {ethers} from 'ethers';

function UserVoting() {

  const [data, setData] = useState({});
  // const [walletAddress,setWalletAddress]=useState('');
  // const [connect_wallet,set_connect_wallet]=useState("Connect To Ethereum Account");
  // async function requestAccount(){
  //   console.log('Requesting account...');

  //   if(window.ethereum){
  //     console.log('detected');

  //     try{
  //       const accounts=await window.ethereum.request({
  //         method:"eth_requestAccounts",
  //       });

  //       setWalletAddress(accounts[0]);
  //     }
  //     catch(error){
  //       console.log('Error Connecting..');
  //     }
  //   }
  //   else{
  //     alert('Metamask Not Detected');
  //   }

  // }

  // async function connectWallet(){
  //   if(typeof window.ethereum !== 'undefined'){
  //     await requestAccount();
  //     const provider=new ethers.providers.Web3Provider(window.ethereum);
  //     set_connect_wallet("Connected")

  //     alert('Metamask Connected Successfully....')

  //   }
  // }

    useEffect(() => {
        fireDb.child("voting_system").on("value", (snapshot) => {
            if (snapshot.val() !== null) {
                setData({ ...snapshot.val() });
            } else {
                setData({});
            }

        });

        return () => {
            setData({});
        };
    }, []);

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
  <h1>Candidate List</h1>
  <section className="profile-cards">
  {
    Object.keys(data).map((id,index)=>{
      return(
        <Candidates candidateName={data[id].name} imgUrl={data[id].url} party={data[id].party} experience={data[id].experience} age={data[id].age} state={data[id].region} district={data[id].district}/>
      )
    })
  }
  </section>
  </div>
</>

  )
}

export default UserVoting
