function patchAndThunk(store) {
  //1.保存原本的dispatch
  const next = store.dispatch;
  
  function dispatchAndThunk(action) { 
    if (typeof action === 'function') {
      //调用函数,传入 原本的dispatch,getState函数,由其内部执行异步操作再自行调用
      action(store.dispatch,store.getState)
    } else { 
      //如果传入action 是对象直接使用原来的dispatch 执行即可
      next(action);
    }

    //2.替换掉 dispatch
    store.dispatch = dispatchAndThunk;
  }
}

//3.调用传入store   中间件功能实现
patchAndThunk(store);

//4.使用  /拦截到dispatch 内部执行异步操作
function foo(dispatch,getState) { 
  //传入函数,实际走 dispatchAndThunk  if语句里面循环,被调用,获取到原本的dispatch,getState
}



store.dispatch(foo)