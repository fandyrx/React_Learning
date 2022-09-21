import { createSlice, configureStore } from "@reduxjs/toolkit";

//1.创建切片:内含名字.初始值,处理方式,state
const counterSlice = createSlice({
	name: "counterNumber",
	//初始数据
	initialState: {
		counter: 0,
	},
	//减速器?
	reducers: {

		incremented: (state) => {
			console.log("incremented调用了");
			state.counter += 1;
		},

		decremented: (state) => {
			state.counter -= 1;
			// console.log(counterSlice.actions,'actions')
			// console.log(store,'store.')
		},
    
		addAction: (state, action) => {
			console.log(state.counter, "addAction:state");
			console.log(action.payload, "addAction:payload");
			state.counter += action.payload;
		},

		subAction: (state, action) => {
			console.log(action, "subNum:action");
			state.counter -= action.payload;
		},
	},
});

//2. 创建store 实例
export const store = configureStore({
	reducer: counterSlice.reducer,
});

//3. 暴露方法
export const { incremented, decremented, subAction, addAction } = counterSlice.actions;
