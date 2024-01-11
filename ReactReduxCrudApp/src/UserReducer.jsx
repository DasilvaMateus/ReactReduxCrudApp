import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Mocks/mock";

const userSlice = createSlice({
    name:"users",
    initialState:userList,
    reducers:{
        addUser: (state, action) =>{
            state.push(action.payload)
        },
        updateUser:(state,action)=>{
            const {id, name, email} = action.payload;
            const uu = state.find(user => user.id == id);
            if(uu){
                uu.name=name;
                uu.email=email;
            }
        },
        deleteUser:(state,action)=>{
            const {id, name, email} = action.payload;
            const uu = state.find(user => user.id == id);
            if(uu){
                return state.filter(f => f.id !== id);
            }
        }
    }
})
export const {addUser, updateUser} = userSlice.actions;
export default userSlice.reducer;