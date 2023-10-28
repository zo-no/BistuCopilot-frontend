/*
@Date		:2023/10/28 15:01:25
@Author		:zono
@Description:用@reduxjs/toolkit初始化
*/
import { createSlice } from '@reduxjs/toolkit'

const counterStore = createSlice({
    name: 'counter',
    //初始化state
    initialState: {
        count: 0,
    },
    //修改状态的方法，同步方法，支持直接修改
    reducers: {
        increment: state => {
            state.count++
        },
        decrement: state => {
            state.count--
        },
        addToNum(state,actions){
            state.count=actions.payload//有效负载
        }
    },
})

//解构actionCreater函数
const { increment, decrement ,addToNum} = counterStore.actions
//获取reducer
const reducer = counterStore.reducer

//以按需的方式导出actionCreater
export {increment, decrement,addToNum}
//默认导出reducer
export default reducer