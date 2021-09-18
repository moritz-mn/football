'use-strict';

import ReactDOM from 'react-dom';
import reportWebVitals from './util/reportWebVitals';
import Router from './router';

ReactDOM.render(<Router />, document.getElementById('react-elements'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
if (process.env.NODE_ENV === 'development') reportWebVitals(console.log);
