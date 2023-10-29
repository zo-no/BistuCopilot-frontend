/*
@Date		:2023/10/28 18:35:58
@Author		:zono
@Description:异步,用于请求后端
*/
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const channelStore = createSlice({
  name: 'channel',
  initialState: {
    channelList: []
  },
  reducers: {
    setChannels (state, action) {
      state.channelList = action.payload
    }
  }
});

const { setChannels } = channelStore.actions;

//-------------------------异步请求后端------------------------------
//写法一
// const fetchChannlList = () => {
//   // const url = "http://localhost:5000/123";
//   return (dispatch) => {
//     // console.log(res.data);
//     fetch('http://geek.itheima.net/v1_0/channels', {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//       },
//     })
//       .then((response) => response.json())
//       .then((res) => {
//         console.log(res);
//         // const a = data.date[1].id
//         dispatch(setChannels(res.data.channels))
//       });
//   };
// };

//写法二
const fetchChannlList = () => {
  return async (dispatch) => {
    const res = await axios.get('http://geek.itheima.net/v1_0/channels')
    dispatch(setChannels(res.data.data.channels))
  }
}

export { fetchChannlList }

const reducer = channelStore.reducer

export default reducer
