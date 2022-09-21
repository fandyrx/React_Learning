import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"

import "./CSSTransition.css"

// 16写法
//  ReactDOM.render(<App/>,document.getElementById('root'));



// 18写法
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<App/>);


