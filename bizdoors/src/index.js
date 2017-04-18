import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './About';
import Team from './Team';
import Portfolio from './Portfolio';
import Contact from './Contact';



import './index.css';
var currentpage = 'App';

if (currentpage ==='Home'){
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}
else
if (currentpage ==='About'){
  ReactDOM.render(
    <About />,
    document.getElementById('root')
  );
}

else
if (currentpage ==='Services'){
  ReactDOM.render(
    <Services />,
    document.getElementById('root')
  );
}

else
if (currentpage ==='Team'){
  ReactDOM.render(
    <Team />,
    document.getElementById('root')
  );
}

else
if (currentpage ==='Portfolio'){
  ReactDOM.render(
    <Portfolio />,
    document.getElementById('root')
  );
}

else
if (currentpage ==='Contact'){
  ReactDOM.render(
    <Contact />,
    document.getElementById('root')
  );
}
