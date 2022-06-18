import React from 'react';
const errorDetail = [
    {
       name: 'Errors',
       detail: 0.12
    },
    {
        name: 'Zeroes',
        detail: 0.12
    },
    {
        name: 'Timeouts',
        detail: 0.12
    },
]

const infos = {
  "errors_last_3days": [
    {
      "count": 2,
      "code": 502
    },
    {
      "count": 720,
      "code": 599
    },
    {
      "count": 1780,
      "code": null
    }
  ],
  "errors_yesterday": [
    {
      "count": 615,
      "code": null
    },
    {
      "count": 305,
      "code": 599
    }
  ],
  "errors_last_hour": [],
  "data": [
    {
      "bookings_current_last_3days": 7556,
      "timeout_yesterday": 0.217542189065684,
      "zeroes_yesterday": 5.03052033295241,
      "avg_price_yesterday": 9447.87135852322,
      "clicks_current_last_hour": 428,
      "avg_price_last_hour": 10243.0263157895,
      "zeroes_last_hour": null,
      "mobile_pessimizer": 0.000999999974737875,
      "bookings_current_last_hour": 32,
      "searches_current_last_3days": 4445192,
      "bookings_previous_last_hour": 98,
      "str_yesterday": 14.9289099526066,
      "errors_yesterday": 0.376232384954177,
      "ctr_last_hour": 0.640574721245229,
      "gate_id": 20,
      "ctr_yesterday": 1.06052388326287,
      "searches_current_yesterday": 2188541,
      "bookings_previous_last_3days": 8647,
      "zeroes_last_3days": 5.55262854787825,
      "clicks_previous_last_hour": 784,
      "timeout_last_3days": 0.122851836321131,
      "errors_last_3days": 0.143953287057117,
      "bookings_previous_yesterday": 3641,
      "searches_previous_yesterday": 2050500,
      "searches_previous_last_hour": 88385,
      "str_last_hour": null,
      "clicks_previous_yesterday": 23364,
      "avg_price_last_3days": 10694.8964067661,
      "searches_current_last_hour": 66815,
      "web_pessimizer": 100.0,
      "ctr_last_3days": 1.12946752356254,
      "clicks_previous_last_3days": 60505,
      "str_last_3days": 15.0496942657398,
      "timeout_last_hour": null,
      "clicks_current_last_3days": 50207,
      "bookings_current_yesterday": 3465,
      "searches_previous_last_3days": 6118984,
      "errors_last_hour": null,
      "clicks_current_yesterday": 23210
    }
  ]
}

let Parseinfo = JSON.stringify(infos)

Parseinfo = JSON.parse(Parseinfo)
console.log(Parseinfo)

let totalWidthStyle = 0;
Parseinfo.errors_last_3days.map(({count}) => totalWidthStyle+=parseInt(count))

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
const ErrorInfo = () => (
  <div className='ErrorInfo-container'>
      <ul className='error_info d-flex'>
          {errorDetail.map(({name, detail}) =>
          <div>
          <div className='d-flex justify_error_badge'>
              <div className='error_info_badge'></div>
              <div>
                <li key={name}>{name}: {detail}</li>
              </div>
          </div>
          <li className='average_info'>Average: 0.12%</li>
          </div>
          )}  
      </ul>
      <div className='d-flex'   style={{width: '100%'}}>
      {Parseinfo.errors_last_3days.map(({count, code}) =>
        <div style={{width: `${(parseInt(count)/totalWidthStyle * 100).toFixed(2)}%`, backgroundColor: colorCode(code), height: '8px'}}></div>
      )}
    </div>
      <ul className='d-flex error_info' style={{width: '100%'}}>
          {Parseinfo.errors_last_3days.map(({count, code}) =>
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
);

export default ErrorInfo;