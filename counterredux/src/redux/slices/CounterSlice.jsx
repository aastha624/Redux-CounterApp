import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:0,
}
export const CounterSlice =createSlice({
    name:"counter",
    initialState,
    // in reducer set functionalitiy
    reducers:{
        increment:(state)=>{
state.value+=1;
        },
        decrement:(state)=>{
            state.value-=1;
        }
    }
})
export const{increment,decrement} = CounterSlice.actions;

// action creation mathi function bar nikal diya and reducer mathi incerment and decrement bar nikal liya
// action creation thi information fetch thay function
export default CounterSlice.reducer;