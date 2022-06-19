import React, { useEffect } from 'react';
import ErrorInfo from './errorInfo';
import Interactions from './interaction';
import { useDispatch, useSelector } from 'react-redux'
import { getYesterdayInfo } from '../Redux/allData/actions/action';

const YesterdayInfo = () => {
    const dataInfo = useSelector((state) => state?.dataInfo);
    const dispatch = useDispatch()
    useEffect(() =>{ 
      const display = async() => await dispatch(getYesterdayInfo())
      display()
    }
  , []);
    const {errors_yesterday, data} = dataInfo
    // const {
    //     zeroes_yesterday,
    //     timeout_yesterday,
    //     avg_price_yesterday,
    //     str_yesterday,
    //     ctr_yesterday,
    //     searches_current_yesterday,
    //     bookings_previous_yesterday,
    //     searches_previous_yesterday,
    //     clicks_previous_yesterday,
    //     bookings_current_yesterday,
    //     clicks_current_yesterday,
    // } = data
    console.log(data)
  
      return (
    <div>
        <p>test</p>
      {/* <ErrorInfo errors={errors_yesterday} errorInfo={data.errors_yesterday} zeroes={zeroes_yesterday} timeout={timeout_yesterday} dataInfo={data} />
      <Interactions dataInfo={data}/> */}
    </div>
  )
};

export default YesterdayInfo;