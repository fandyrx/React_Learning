import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"

//1.react-redux'
//引入store,组件,包裹子组件,传入store
import store from '@/store/index.js'
import { Provider } from 'react-redux'

// 16写法
//  ReactDOM.render(<App/>,document.getElementById('root'));



// 18写法
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
    <Provider store={store}>
      <App/>
    </Provider>
 );


