/*
@Date		:2023/10/31 17:07:02
@Author		:zono
@Description:用户登录后的信息储存
*/
import { createSlice } from "@reduxjs/toolkit";
import { request } from "@/utils";
// import axios from "axios";

const userStore = createSlice({
  name: "username",
  //初始化state
  initialState: {
    token: "",
  },
  //修改状态的方法，同步方法，支持直接修改
  reducers: {
    setToken(state, action) {
      //获取token并储存
      state.token = action.payload;
    },
  },
});

const { setToken } = userStore.actions;

const userReducer = userStore.reducer;

//异步请求
const fetchLogin = (loginForm) => {
  console.log(loginForm);
  const username = loginForm.username;
  const password = loginForm.password;

  // 创建请求数据
  const requestData = new URLSearchParams();
  requestData.append('grant_type', '');
  requestData.append('username', username);
  requestData.append('password', password);
  requestData.append('scope', '');
  requestData.append('client_id', '');
  requestData.append('client_secret', '');

  return async (dispatch) => {
    //分布异步请求，并存入
    request.post('/token', requestData,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then((response)=>{
        console.log(response.data);
        dispatch(setToken(response.data.token));
    });

  };
};



export { fetchLogin,setToken };
export default userReducer;
