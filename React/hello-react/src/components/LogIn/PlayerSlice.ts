import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { IPlayer } from "../../models/Player";
import { RootState } from "../../Shared/Redux/store";

const initialState:IPlayer =
{
    id: 0,
    listofPlayer: [],
    name: "",
    username: "",
    password: "",
    health: 0,
    gold: 0,
    email: ""
}

const playerSlice =createSlice({
    name:"player",
    initialState ,
 reducers :{
    setPlayer :(state,action: PayloadAction<IPlayer>)=>{
        state.id=action.payload.id;
        state.username=action.payload.username;
        state.name=action.payload.name;
        state.email=action.payload.email;
        state.password=action.payload.password;
        state.listofPlayer=action.payload.listofPlayer;
        state.health=action.payload.health;
        state.gold=action.payload.gold;
    },
    setId:(state,action : PayloadAction <number>)=>
    {
        state.id=action.payload;
    },
    setDefault:(state) =>{
        state.listofPlayer =[];
       state.id=0;
       state.name="";
       state.email="";
       state.username="";
       state.password="";
       state.health=0;
       state.gold=0;
    }
 }})
    export const {setPlayer,setDefault}=playerSlice.actions;
    export default playerSlice.reducer;
    export const selectPlayer=(state:RootState)=>state.player;