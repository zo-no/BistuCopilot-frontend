/*
@Date		:2023/10/31 17:07:02
@Author		:zono
@Description:记录用户登录后的信息
1、获取token
*/
import { createSlice } from "@reduxjs/toolkit";
import { removeToken, request } from "@/utils";
import { setToken as _setToken, getToken } from "@/utils";

const userStore = createSlice({
  name: "username",
  initialState: {
    token: getToken() || "",
    userInfo: {},
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      _setToken(action.payload);
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    clearUserInfo(state) {
      state.token=''
      state.userInfo = {};
      removeToken()
    }
  },
});

//导出
const { setToken, setUserInfo,clearUserInfo } = userStore.actions;

const fetchLogin = (loginForm) => {
  /*
  @Description: 异步请求获取token
  */
  const username = loginForm.username;
  const password = loginForm.password;
  // 创建请求数据
  const requestData = new URLSearchParams();
  requestData.append("grant_type", "");
  requestData.append("username", username);
  requestData.append("password", password);
  requestData.append("scope", "");
  requestData.append("client_id", "");
  requestData.append("client_secret", "");
  return async (dispatch) => {
    //分布异步请求，并存入
    request
      .post("/token", requestData, {
        headers: {
          'accept': "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        // console.log(response.data);
        dispatch(setToken(response.data.token));
      });
  };
};

const fetchUserInfo = () => {
  /*
  @Description: 用Token请求个人数据
  */
//  console.log(123);
  const token = getToken();
  return async (dispatch) => {
    if (token) {
      request
        .get("/users/me", {
          headers: {
            'accept': 'application/json',
            'Authorization': "Bearer " + token
          },
        })
        .then((response) => {
          console.log("请求成功了");
          console.log(response.data);
          dispatch(setUserInfo(response.data));
        })
        .catch((error) => {
          // 处理错误
          // err报错调整
          console.error("请求失败:无法获取用户信息。", error.response.data.detail);
        });
    } else {
      console.log( "用户未登录。")
    }
  };
};

const userReducer = userStore.reducer;

export { fetchLogin, fetchUserInfo, clearUserInfo };
export default userReducer;
