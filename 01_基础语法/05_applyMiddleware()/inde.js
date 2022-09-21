import store from "../../04_learn_scaflod/src copy/store";

function patchThunk(store) {
  const next = store.dispatch;

  function dispatchAndThunk(action) {
    if (typeof action === "function") {
      action(store.dispatch,store.getState)
    }else {
      next()
    }
  }
  
  // store.dispatch = dispatchAndThunk
  return dispatchAndThunk
}


function applyMiddleware(...middlewares) {
    middlewares.forEach(middleware  => {
      store.dispatch = middleware(store)
    })
}   

applyMiddleware(patchThunk)