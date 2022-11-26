import React,{useEffect,useState} from 'react';
import '../css/winning_prediction.css';
import Sidebar from './Sidebar';
import SidebarUser from './SidebarUser';
import fireDb from "./firebase";

function ElectionResults(props) {

  const [data, setData] = useState({});

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

  return (
    <>
  
  <SidebarUser/>
  <div className="election-results">
  <section className="results">
    <main>
      <h1>Final Election Results</h1>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>Candidate Name</th>
            <th>Party</th>
            <th>Region</th>
            <th>Votes</th>
            {/* <th>Chickens</th>
                  <th>Pigs</th>
                  <th>Snakes</th> */}
          </tr>
        </thead>
        <tbody>
          {
            Object.keys(data).map((id,index)=>{
              return(
                <tr>
            <td data-label="Name">{data[id].name}</td>
            <td data-label="Grid">{data[id].party}</td>
            <td data-label="Type">{data[id].district}</td>
            <td data-label="Region">{(localStorage.getItem(`${data[id].party}`)===null||localStorage.getItem(`${data[id].party}`)===undefined) ? 0 : localStorage.getItem(`${data[id].party}`) }</td>
          </tr>
              )
            })
          }
         
        </tbody>
      </table>
    </main>
  </section>
  </div>
</>

  )
}

export default ElectionResults
