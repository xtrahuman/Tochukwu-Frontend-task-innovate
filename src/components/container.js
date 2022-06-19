import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import { navs } from './navbar';
import HourInfo from './hourInfo';
import YesterdayInfo from './yesterdayInfo';
import ThreeDayInfo from './threeDaysInfo';
import TodayInfo from './todayInfo';
// import getTodayInfo from '../Redux/allData/actions/action';


const Container = () => (
  <div>
    <h1>Main Metrics</h1>
    <Navbar/>
   
    <Routes>
    <Route path={'/'} element={<HourInfo />} /> 
    <Route path={'/Last3days'} element={<ThreeDayInfo />} /> 
    <Route path={'/today'} element={<TodayInfo />} /> 
    <Route path={'/yesterday'} element={<YesterdayInfo/>} /> 
    </Routes>
  </div>
);

export default Container;