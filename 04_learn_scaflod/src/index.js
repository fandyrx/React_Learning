import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import App from "./App"
import store from './store' 



// 18写法
//1.createRoot 创建React根元素
const root = ReactDOM.createRoot(document.getElementById('root'));

//2.渲染到获取的root Dom元素
root.render(
  <Provider store={store}>
      <App/>
  </Provider>
   
);


// 16写法
//  ReactDOM.render(<App/>,document.getElementById('root'));


//17写法 // import ReactDOM from 'react-dom';
//  ReactDOM.render(
//   <Provider store={store} >
//            <App/>
//   </Provider>
   
// ,
//     document.getElementById('root')
//  )

