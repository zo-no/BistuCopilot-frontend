/*
@Date		:2023/10/28 12:12:10
@Author		:zono
@Description:store入口文件
*/
import { configureStore } from "@reduxjs/toolkit";
//导入子模块reducer
import counterReducer from "./modules/counterStore"
import channelReducer from "./modules/channeelStore";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        channel: channelReducer,
    }
})

export default store