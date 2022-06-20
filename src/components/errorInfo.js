import React from 'react';
import { useSelector } from 'react-redux';

const colorCode = (color) => {
    switch (color) {
        case 599:
          return '#FFCC00';
        case 502:
          return '#5856D5'
        case null:
         return '#2196F3'
        default:
          return '';
      }
}
const ErrorInfo = ({errors, errorInfo, zeroes, timeout}) => {

    const errorDetail = [
        {
           name: 'Errors',
           detail: errorInfo
        },
        {
            name: 'Zeroes',
            detail: zeroes
        },
        {
            name: 'Timeouts',
            detail: timeout
        },
    ]
let totalWidthStyle = 0;
let sum = 0
errors?.map(({count}) => totalWidthStyle+=parseInt(count))
errorDetail?.map(({detail}) => sum+=parseInt(detail))

let averageError = sum/errors?.length

return (
  <div className='ErrorInfo-container'>
      <ul className='error_info d-flex'>
          {errorDetail.map(({name, detail}) =>
          <div key={name}>
          <div className='d-flex justify_error_badge'>
              <div className='error_info_badge'></div>
              <div>
                <li className='bolded_p'>{name}: { detail==null ? `No data` : detail?.toFixed(2)}</li>
              </div>
          </div>
          <li className='average_info'>Average: { detail==null ? `No data` : averageError?.toFixed(2)}</li>
          </div>
          )}  
      </ul>
      <div className='d-flex' style={{width: '100%'}}>
    { errors?.length===0? <p className='error-center'> No error data for this period</p> : errors?.map(({count, code}) =>
        <div key={code} style={{width: `${(parseInt(count)/totalWidthStyle * 100).toFixed(2)}%`, backgroundColor: colorCode(code), height: '8px'}}></div>
      )}
    </div>
      <ul className='d-flex error_info' style={{width: '100%'}}>
          {errors?.map(({count, code}) =>
          <div key={code} className='d-flex '>
              {
                 code === null 
                ?
                  <li className='d-flex code_pos'><div className='color_size' style={{background: colorCode(code)}}></div><span>other : {count}</span></li>
                :
                <li className='d-flex code_pos'><div className='color_size'  style={{background: colorCode(code)}}></div><span>Error {code}: {count}</span></li>
                
              }
                
          </div>
          )}  
      </ul>
  </div>
)
        };

export default ErrorInfo;