
import ReactDOM from 'react-dom';
import './App.css'
import './MyStyle.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from 'react';
import About from './About';
import Contact from './Contact';
import ServiceClassComponent from './ServiceClassComponent';
import ServiceFunctionComponent from './ServiceFunctionComponent';

ReactDOM.render(
  <StrictMode>
    {/* <App /> */}
    {/* <Contact /> */}
    <ServiceClassComponent />
    <ServiceFunctionComponent />
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
