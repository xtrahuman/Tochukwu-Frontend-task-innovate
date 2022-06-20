import React from 'react';
import Cone from '../images/Shape1.png'
import Hand from '../images/Shape2.png'
import Cart from '../images/Shape3.png'
import { allData } from '../Redux/allData/reducer/reducer';

const{web_pessimizer, mobile_pessimizer} = allData

const Interactions = ({bookingsCurrent, bookingsPrevious, str, averagePrice, ctr, searchCurrent, searchPrevious, clicksPrevious, clicksCurrent, period}) => {
    const searchPercent = ((searchCurrent-searchPrevious)/searchPrevious) * 100
    const clicksPercent = ((clicksCurrent-clicksPrevious)/clicksPrevious) * 100
    const searchGreaterThan = searchCurrent > searchPrevious
    const clicksGreaterThan = clicksCurrent > clicksPrevious
return (
  <div className='interaction-container'>
    <div className='d-flex section_style'>
        <div className='section_width d-flex'>
            <div>
                <div className='big_round d-flex'>
                <img src={Cone} alt="searchIcon" className="searchIcon" />
                </div>
            </div>
            <div>
            <div className='percent_tag d-flex' >
            <p className='bolded_p desc_header'>Searches</p> <span className='percent_badge' style={{color:'#fff', backgroundColor: searchGreaterThan ? '#8BC34A' : '#FF6A67'}}>{searchPercent.toFixed(2)}%</span>
            </div>
            <div className='flex_period'>
                <span className='data_num'>{searchCurrent}</span>
                <span className='data_str'>current {period}</span>
            </div>
            <div className='style_prev flex_period'>
                <span className='data_num'>{searchPrevious}</span>
                <span className='data_str'>previous {period}</span>
            </div>
            </div>
        </div>
        <div className='section_width'>
            <p className='bolded_p desc_header'>Mobile traffic: {mobile_pessimizer?.toFixed(2)}%</p>
            <p className='bolded_p desc_header'>Web traffic: {web_pessimizer?.toFixed(2)}%</p>
            <p className='faint_desc'>traffic on mobile and desktop devices</p>
            <div>
                <span className='highlight_one'>Help: </span>
                <span className='highlight_two'>searches, pessimisation</span>
            </div>
        </div>
    </div>
    <div className='d-flex section_style'>
    <div className='section_width d-flex'>
            <div>
                <div className='big_round d-flex'>
                <img src={Hand} alt="searchIcon" className="searchIcon" />
                </div>
            </div>
            <div>
            <div className='percent_tag d-flex' >
            <p className='bolded_p desc_header'>Clicks</p> <span className='percent_badge' style={{color:'#fff', backgroundColor:  clicksGreaterThan ? '#8BC34A' : '#FF6A67'}}>{ clicksPercent.toFixed(2)}%</span>
            </div>
            <div className='flex_period'>
                <span className='data_num'>{clicksCurrent}</span>
                <span className='data_str'>current {period}</span>
            </div>
            <div className='style_prev flex_period'>
                <span className='data_num'>{clicksPrevious}</span>
                <span className='data_str'>previous {period}</span>
            </div>
         </div>
        </div>
        <div className='section_width'>
            <p className='ctrColor bolded_p desc_header'>Ctr: {ctr?.toFixed(2)}%</p>
            <p className='faint_desc'>Conversion from searches  to clicks on all devices.</p>
            <div>
                <span className='highlight_one'>Help: </span>
                <span className='highlight_two'>ctr, Clicks</span>
            </div>
        </div>
    </div>
    <div className='d-flex section_style'>
    <div className='section_width d-flex'>
            <div>
                <div className='big_round d-flex'>
                <img src={Cart} alt="searchIcon" className="searchIcon" />
                </div>
            </div>
            <div>
            <div className='percent_tag d-flex' >
            <p  className='bolded_p desc_header'>Bookings</p> 
            </div>
            <div className='flex_period'>
                <span className='data_num '>{bookingsCurrent}</span>
                <span className='data_str '>current</span>
            </div>
            <div className='style_prev flex_period'>
                <span className='data_num'>{bookingsPrevious}</span>
                <span className='data_str'>previous</span>
            </div>
            </div>
        </div>
        <div className='section_width'>
            <p  className='bolded_p desc_header'>Str: {str === null? `No data` : `${str?.toFixed(2)}%`}</p>
            <p  className='bolded_p desc_header'>Avg.Price {averagePrice?.toFixed(2)}</p>
            <p className='faint_desc'>Conversion from cliks  to bookings on all devices.</p>
            <div>
                <span className='highlight_one'>Help:</span>
                <span className='highlight_two'>Str, bookings, Avg.Price</span>
            </div>
        </div>
    </div>
  </div>
);

}

export default Interactions;