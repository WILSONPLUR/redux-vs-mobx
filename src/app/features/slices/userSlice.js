import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        { name: "Elton", nickname: "Wilson", id: 1 },
        { name: "Donald", nickname: "dnd", id: 2 },
        { name: "Rockie", nickname: "rock", id: 3 }
    ]
};

const userSlice = createSlice({
    name: "UserSlice",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.unshift(action.payload);
        },
        /*updateUser: (state, action) => {
            const user = state.users.filter((user) => user.id === action.payload.id);
            const updatedUser = {
                ...user,
                name: action.payload.name,
                nickname: action.payload.nickname
            };
            state[action.payload.id] = updatedUser;
        },*/
        filteredById: (state) => {
          state.users = state.users.sort((a, b) => b.id - a.id);
        },
        resetFilter: (state) => {
            state.users = state.users.sort((a, b) => a.id - b.id);
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter((user) => user.id !== action.payload);
        }
    }
});

export const { addUser, updateUser, resetFilter, filteredById, deleteUser } = userSlice.actions;
export default userSlice;
