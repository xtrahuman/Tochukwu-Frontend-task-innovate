export const GET_LAST_HOUR_DATA = 'ALLDATA/LASTHOUR/GET';
export const GET_TODAY_DATA = 'ALLDATA/TODAY/GET';
export const GET_YESTERDAY_DATA = 'ALLDATA/YESTERDAY/GET';
export const GET_LAST_THREE_DAYS_DATA = 'ALLDATA/LAST_THREE_DAYS/GET';



const getTodayInfo = () =>  ({
    type: GET_LAST_HOUR_DATA
  });


export const getHourInfo = () => ({
    type: GET_LAST_HOUR_DATA ,
  });


export const getYesterdayInfo = () => ({
    type: GET_YESTERDAY_DATA
  });


export const getThreeDayInfo = () =>({
    type: GET_LAST_THREE_DAYS_DATA
  });



// const dateData = (dates) => {
//   switch (dates) {
//       case 'Last Hour':
//         dateObj = {
//           errors_last_hour,
//           data: filterData('last_hour'),
//         }
//        return dateObj;
//       case 'Last Hour':
//         dateObj = {
//           errors_last_hour,
//           data: filterData('last_hour'),
//         }
//        return dateObj;
//       case 'Yesterday':
//         dateObj = {
//           errors_yesterday,
//           data: filterData('yesterday'),
//         }
//        return dateObj;
//       case 'Last 3 days':
//         dateObj = {
//           errors_last_3days,
//           data: filterData('last_3days'),
//         }
//        return dateObj
//       default:
//         return ;
//     }
// }

export default getTodayInfo;