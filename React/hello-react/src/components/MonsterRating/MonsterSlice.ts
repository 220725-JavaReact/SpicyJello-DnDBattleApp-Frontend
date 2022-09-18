import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../Shared/Redux/store";
import { IMonster } from "../MonsterBox/MonsterBox";

const initialState:IMonster=
{
    listofMonsters:[],
    name:"",
    Source:"",
    Modifier:"",

}
const monsterSlice=createSlice({
    name:"monsters",
    initialState,
    reducers:{
        setMonster:(state,action:PayloadAction<IMonster>)=>{
            state.id=action.payload.id;
            state.name=action.payload.name;
            state.Modifier=action.payload.Modifier;
            state.Source=action.payload.Source;
            state.listofMonsters=action.payload.listofMonsters;
            state.Gameid=action.payload.Gameid;

        },
        setId:(state,action:PayloadAction<number>)=>
        {
            state.id=action.payload;
        },
        setDefault:(state)=>{
            state.listofMonsters=[];
            state.id=0;
            state.name="";
            state.Modifier="";
            state.Source="";

        }

    }
})
export const{setMonster,setDefault}=monsterSlice.actions;
export default monsterSlice.reducer;
export const selectMonser=(state:RootState)=>state.monster;