import { createSlice, configureStore,createAsyncThunk } from '@reduxjs/toolkit'

//slice reducer 抽离
const stuSlice = createSlice({
  name: "stu", //自动生成action的type

  initialState:{
    name:"孙悟空",
    age:18,
    gender:"男",
    address:"花果山"
  },
  
  reducers:{  //指定state的各种操作
    setName(state,action) {
      console.log("state:",state,"action:",action)
      state.name = "猪八戒"      //可以直接修改,该state为代理对象
    }
  },
  extraReducers: builder => {
    builder.addCase(changeAsync.fulfilled,(state,action) => {
       console.log("异步state",state,"异步action:",action) 
      // state.name = action.payload 
      state.name = action.payload
    })
  }


})



export const changeAsync = createAsyncThunk("changeAsync",async ()=> {
  const res = await new Promise((resolve,reject) =>{
    setTimeout(() => {
      resolve(" 我是2s异步请求模拟结果")
    }, 2000);
  })
  // 上方为异步请求AXIOS 
  return res
})


//自动生成actions
//action 对象的结构{type:name/函数名,payload:函数的参数} 
export const { setName } = stuSlice.actions




const store = configureStore({
  reducer:{
    student:stuSlice.reducer
  }
})


// 根组件利用Provider 提供store,全局使用
export default store
