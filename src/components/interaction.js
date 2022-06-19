import React from 'react';
// import { allData } from '../Redux/allData/reducer/reducer';

// const{web_pessimizer, mobile_pessimizer} = allData

const Interactions = () => (
  <div className='interaction-container'>
    <div>
        <div>
            <p>Searches</p>
            <div>
                <span>2980</span>
                <span>yesterday</span>
            </div>
            <div>
                <span>2980</span>
                <span>Last friday</span>
            </div>
        </div>
        <div>
            <p>mobile traffic</p>
            <p>Web traffic</p>
            <p>traffic on mobile and desktop devices</p>
            <div>
                <span>Help:</span>
                <span>searches, permmisions</span>
            </div>
        </div>
    </div>
    <div>
        <div>
            <p>Clicks</p>
            <div>
                <span>243</span>
                <span>yesterday</span>
            </div>
            <div>
                <span>243</span>
                <span>Last friday</span>
            </div>
        </div>
        <div>
            {/* <p>mobile traffic: {mobile_pessimizer}</p>
            <p>Web traffic: {web_pessimizer}</p> */}
            <p>traffic on mobile and desktop devices</p>
            <div>
                <span>Help:</span>
                <span>searches, permmisions</span>
            </div>
        </div>
    </div>
    <div>
        <div>
            <p>Searches</p>
            <div>
                <span>2980</span>
                <span>yesterday</span>
            </div>
        </div>
        <div>
            <p>mobile traffic</p>
            <p>Web traffic</p>
            <p>traffic on mobile and desktop devices</p>
            <div>
                <span>Help:</span>
                <span>searches, permmisions</span>
            </div>
        </div>
    </div>
  </div>
);

export default Interactions;