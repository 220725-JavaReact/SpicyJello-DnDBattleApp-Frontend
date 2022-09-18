import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/User";
import { RootState } from "../../shared/Redux/store";

const initialState: IUser = {
    id: 0,
    name: "",
    email: "",
    username: "",
    password: "",
    gold: 0,
    games: [],
    upgrades: [],
    weapons: []
};
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.username = action.payload.username;
            state.password = action.payload.password;
            state.gold = action.payload.gold;
            state.games = action.payload.games;
            state.upgrades = action.payload.upgrades;
            state.weapons = action.payload.weapons;
        },
        resetUser: (state) => {
            state.id = 0;
            state.name = "";
            state.email = "";
            state.username = "";
            state.password = "";
            state.gold = 0;
            state.games = [];
            state.upgrades = [];
            state.weapons = [];
        }
    }
});
export const { setUser, resetUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;