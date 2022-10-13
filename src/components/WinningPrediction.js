import React from 'react';
import '../css/prediction.css';
import Sidebar from './Sidebar';
import SidebarUser from './SidebarUser';

function WinningPrediction() {
  return (
    <>
   <SidebarUser/>
  <div className="prediction">
  <div className="bar-graph">
    <div className="chartBarsWrap">
      <div className="chartBars chartBars1">
        <ul className="numbers">
          <li>
            <span>100%</span>
          </li>
          <li>
            <span>80%</span>
          </li>
          <li>
            <span>60%</span>
          </li>
          <li>
            <span>40%</span>
          </li>
          <li>
            <span>20%</span>
          </li>
          <li>
            <span>0%</span>
          </li>
        </ul>
        <ul className="bars">
          <li>
            <span className="tooltip">
              <span className="tooltipContent">
                Very important info that you should read!
              </span>
              <div data-percentage={52} className="bar greenBar trigger" />
            </span>
            <b>Alpha</b>
          </li>
          <li>
            <span className="tooltip">
              <span className="tooltipContent">This one is trending well.</span>
              <div data-percentage={83} className="bar blueBar trigger" />
            </span>
            <b>Beta</b>
          </li>
          <li>
            <span className="tooltip">
              <span className="tooltipContent">I like cheese!</span>
              <div data-percentage={94} className="bar orangeBar trigger" />
            </span>
            <b>Gamma</b>
          </li>
          <li>
            <span className="tooltip">
              <span className="tooltipContent">Monkey's are funny!</span>
              <div data-percentage={64} className="bar purpleBar trigger" />
            </span>
            <b>Delta</b>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </div>
</>

  )
}

export default WinningPrediction
