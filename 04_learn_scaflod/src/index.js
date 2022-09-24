import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from "./App"
import store from './store' 


// 18写法
const root = ReactDOM.createRoot(document.getElementById('root'));
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

