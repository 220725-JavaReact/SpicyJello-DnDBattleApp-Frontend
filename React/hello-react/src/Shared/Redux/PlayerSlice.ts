/**
 * slice in redux is soemwhat the same as getting slice as a pizza
 * slice will take a portion of your redux store and in this particular portion will have the state as well as the reducers
 * 
 */

import { Satellite } from "@mui/icons-material";
import { PayloadAction } from "@reduxjs/toolkit";
import { IPlay } from "../../models/playerI";
import { RootState } from "./store";

// setting up the initial sate of this sliec and giving it a type
const initialState:IPlay={
id : 0,
listofPlayer:[],
name:"",
totalBadge:0
},
const playerSlice= createSlice({
    name:"player",
    initialState,
    /** sinec the store is immutable , we need to dictable to redux how can we change our value */
    reducers:{
        /*  state parameter will hold the current inforamtion from the store * */
        setPlayer:(state: { id: any; listofPlayer: any; name: any; totalBadge: any; },action :PayloadAction<IPlay>) => {
         /**deep within redux documenation they have have state that reducer must change its refererce */
            state.id=action.payload.id;
            state.listofPlayer=action.payload.listofPlayer;
            state.name=action.payload.name;
            state.totalBadge=action.payload.totalBadge;
        },
        setId:(state: { id: any; },action:PayloadAction<number>)=>{
            state.id=action.payload;
        },
        setDefault:(state: { listofPlayer: never[]; id: number; name: string; totalBadge: number; })=>
        {
            state.listofPlayer=[];
            state.id=0;
            state.name="";
            state.totalBadge=0;
        

        }
        }
    }
})

export const[setPlayer ,setDefault]=playerSlice.actions;
//let our store have to access to slicer's reducers
export default playerSlice.reducer;
//let all our compornt have capabiltiy to accesss this slicer 's state
//TLDR: this give our component access to the actutal paly data in our store
export const selectPlayer=(state:RootState)=> state.player;