/*
@Date		:2023/10/28 12:12:10
@Author		:zono
@Description:store入口文件
*/
import { configureStore } from "@reduxjs/toolkit";
//导入子模块reducer
import userReducer from "./modules/user"
// import channelReducer from "./modules/channeelStore";

const store = configureStore({
    reducer: {
        user: userReducer,
        // channel: channelReducer,
    }
})

export default store