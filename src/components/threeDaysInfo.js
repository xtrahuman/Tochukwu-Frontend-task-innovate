import React, { useEffect } from 'react';
import ErrorInfo from './errorInfo';
import Interactions from './interaction';
import { useSelector,useDispatch } from 'react-redux';
import  { getThreeDayInfo } from '../Redux/allData/actions/action';


const ThreeDayInfo = () => {
  const dataInfo = useSelector((state) => state.dataInfo);
  const dispatch = useDispatch()
  useEffect(() =>{ 
    const display = () => dispatch(getThreeDayInfo())
    display()
  }
, [dispatch]);
  const {errors_last_3days, data} = dataInfo
  if(data)
  { const {
      zeroes_last_3days,
      timeout_last_3days,
      avg_price_last_3days,
      str_last_3days,
      ctr_last_3days,
      searches_current_last_3days,
      bookings_previous_last_3days,
      searches_previous_last_3days,
      clicks_previous_last_3days,
      bookings_current_last_3days,
      clicks_current_last_3days,
  } = data

  return (
          <div>
          <ErrorInfo errors={errors_last_3days} errorInfo={data.errors_last_3days} zeroes={zeroes_last_3days} timeout={timeout_last_3days} dataInfo={data} />
          <Interactions averagePrice={avg_price_last_3days} str={str_last_3days} bookingsPrevious={bookings_previous_last_3days} bookingsCurrent={bookings_current_last_3days} ctr={ctr_last_3days} dataInfo={data} searchCurrent={searches_current_last_3days} searchPrevious = {searches_previous_last_3days} clicksPrevious={clicks_previous_last_3days} clicksCurrent={clicks_current_last_3days}  period={'3days'}/>
        </div>
    )
}
};

export default ThreeDayInfo;