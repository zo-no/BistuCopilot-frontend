/*
@Date		:2023/10/31 17:07:02
@Author		:zono
@Description:记录用户登录后的信息
1、获取token
*/
import { createSlice } from "@reduxjs/toolkit";
import { request } from "@/utils";
import { setToken as _setToken, getToken, removeToken } from '@/utils'

const userStore = createSlice({
  name: "username",
  initialState: {
    token: getToken() || '',
  },
  reducers: {
    setToken (state, action) {
      state.token = action.payload
      _setToken(action.payload)
    },
  },
});

const fetchLogin = (loginForm) => {
  /*
  @Description: 异步请求获取token
  */
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
        dispatch(setToken(response.data.access_token));
    });

  };
};



//导出
const { setToken } = userStore.actions;

const userReducer = userStore.reducer;

export { fetchLogin,setToken };
export default userReducer;
