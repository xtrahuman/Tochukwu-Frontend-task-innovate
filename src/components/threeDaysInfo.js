import React, { useEffect } from 'react';
import ErrorInfo from './errorInfo';
import Interactions from './interaction';
import { useSelector,useDispatch } from 'react-redux';
import  { getThreeDayInfo } from '../Redux/allData/actions/action';


const ThreeDayInfo = () => {
  const dataInfo = useSelector((state) => state.dataInfo);
  const dispatch = useDispatch()
  useEffect(() =>{ 
    const display = async() => await dispatch(getThreeDayInfo())
    display()
  }
, []);
  const {errors_last_3days, data} = dataInfo
    return (
  <div>
      <p>test</p>
    {/* <ErrorInfo errors={errors_last_3days} dataInfo={data} />
    <Interactions dataInfo={data}/> */}
  </div>
)
};

export default ThreeDayInfo;