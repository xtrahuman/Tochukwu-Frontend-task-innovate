import React, { useEffect } from 'react';
import ErrorInfo from './errorInfo';
import Interactions from './interaction';
import { useDispatch, useSelector } from 'react-redux'
import { getYesterdayInfo } from '../Redux/allData/actions/action';

const YesterdayInfo = () => {
    const dataInfo = useSelector((state) => state?.dataInfo);
    const dispatch = useDispatch()
    useEffect(() =>{ 
      const display = () => dispatch(getYesterdayInfo())
      display()
    }
  ,[dispatch]);
    const {errors_yesterday, data} = dataInfo

    if(data)
    { const {
        zeroes_yesterday,
        timeout_yesterday,
        avg_price_yesterday,
        str_yesterday,
        ctr_yesterday,
        searches_current_yesterday,
        bookings_previous_yesterday,
        searches_previous_yesterday,
        clicks_previous_yesterday,
        bookings_current_yesterday,
        clicks_current_yesterday,
    } = data
    return (
        <div>
          <ErrorInfo errors={errors_yesterday} errorInfo={data.errors_yesterday} zeroes={zeroes_yesterday} timeout={timeout_yesterday} dataInfo={data} />
          <Interactions averagePrice={avg_price_yesterday} str={str_yesterday} bookingsPrevious={bookings_previous_yesterday} bookingsCurrent={bookings_current_yesterday} ctr={ctr_yesterday} dataInfo={data} searchCurrent={searches_current_yesterday} searchPrevious = {searches_previous_yesterday} clicksPrevious={clicks_previous_yesterday} clicksCurrent={clicks_current_yesterday}  period={'yesterday'}/>
        </div>
      )
}

};

export default YesterdayInfo;