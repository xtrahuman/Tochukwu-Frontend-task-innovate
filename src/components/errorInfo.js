import React from 'react';
import { useSelector } from 'react-redux';

const colorCode = (color) => {
    switch (color) {
        case 599:
          return 'blue';
        case 502:
          return 'red'
        case null:
         return 'green'
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
    const data = useSelector((state) => state.dataInfo);
let totalWidthStyle = 0;
errors?.map(({count}) => totalWidthStyle+=parseInt(count))

return (
  <div className='ErrorInfo-container'>
      <ul className='error_info d-flex'>
          {errorDetail.map(({name, detail}) =>
          <div>
          <div className='d-flex justify_error_badge'>
              <div className='error_info_badge'></div>
              <div>
                <li key={name}>{name}: {detail.toFixed(2)}</li>
              </div>
          </div>
          <li className='average_info'>Average: 0.12%</li>
          </div>
          )}  
      </ul>
      <div className='d-flex' style={{width: '100%'}}>
      {errors?.map(({count, code}) =>
        <div style={{width: `${(parseInt(count)/totalWidthStyle * 100).toFixed(2)}%`, backgroundColor: colorCode(code), height: '8px'}}></div>
      )}
    </div>
      <ul className='d-flex error_info' style={{width: '100%'}}>
          {errors?.map(({count, code}) =>
          <div className='d-flex '>
              {
                 code === null 
                ?
                  <li> other : {count}</li>
                :
                <li key={code}> Error {code}: {count}</li>
                
              }
                
          </div>
          )}  
      </ul>
  </div>
)
        };

export default ErrorInfo;