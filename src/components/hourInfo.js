import React, { useEffect } from 'react';
import ErrorInfo from './errorInfo';
import Interactions from './interaction';
import { useSelector,useDispatch } from 'react-redux';
import { getHourInfo } from '../Redux/allData/actions/action';


const HourInfo = () => {
  const dataInfo = useSelector((state) => state?.dataInfo);
  const dispatch = useDispatch()
  useEffect(() =>{ 
    const display = () => dispatch(getHourInfo())
    display()
  }
, [dispatch]);
  const {errors_last_hour, data} = dataInfo

  if(data)
  { const {
      zeroes_last_hour,
      timeout_last_hour,
      avg_price_last_hour,
      str_last_hour,
      ctr_last_hour,
      searches_current_last_hour,
      bookings_previous_last_hour,
      searches_previous_last_hour,
      clicks_previous_last_hour,
      bookings_current_last_hour,
      clicks_current_last_hour,
  } = data
  return (
      <div>
        <ErrorInfo errors={errors_last_hour} errorInfo={data.errors_last_hour} zeroes={zeroes_last_hour} timeout={timeout_last_hour} dataInfo={data} />
        <Interactions averagePrice={avg_price_last_hour} str={str_last_hour} bookingsPrevious={bookings_previous_last_hour} bookingsCurrent={bookings_current_last_hour} ctr={ctr_last_hour} dataInfo={data} searchCurrent={searches_current_last_hour} searchPrevious = {searches_previous_last_hour} clicksPrevious={clicks_previous_last_hour} clicksCurrent={clicks_current_last_hour}  period={'last_hour'}/>
      </div>
    )
}
};

export default HourInfo;