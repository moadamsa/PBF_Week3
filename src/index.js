import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelloComponent from './HelloComponent';
import Login from './Login/Login'
import reportWebVitals from './reportWebVitals';

// const HelloComponent = () => {
//   return HelloComponent
// }
// class StateFullComponent extends React.Component{
//     render(){
//       return<p>StateFullComponent</p>
//     }
// }
ReactDOM.render(<Login />, document.getElementById('root'));
reportWebVitals();
